import React, {type ReactNode, useRef} from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Info';

import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import {useReactToPrint} from 'react-to-print';

import BlogPostItem from "../../index"

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const {selectMessage} = usePluralForm();
    return (readingTimeFloat: number) => {
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(
            readingTime,
            translate(
                {
                    id: 'theme.blog.post.readingTime.plurals',
                    description:
                        'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: 'One min read|{readingTime} min read',
                },
                {readingTime},
            ),
        );
    };
}

function ReadingTime({readingTime}: { readingTime: number }) {
    const readingTimePlural = useReadingTimePlural();
    return <>{readingTimePlural(readingTime)}</>;
}

function DateTime({
                      date,
                      formattedDate,
                  }: {
    date: string;
    formattedDate: string;
}) {
    return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
    return <>{' · '}</>;
}

export default function BlogPostItemHeaderInfo({printRef, className}: { printRef: any, className?: Props }): ReactNode {
    const {metadata, isBlogPostPage} = useBlogPost();
    const {date, readingTime, frontMatter, title} = metadata;

    const dateTimeFormat = useDateTimeFormat({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });

    const formatDate = (blogDate: string) =>
        dateTimeFormat.format(new Date(blogDate));

    const reactToPrintFn = useReactToPrint({
        contentRef: printRef,
        copyShadowRoots: true,
        preserveAfterPrint: true,
        documentTitle: title,
        bodyClass: "",
        pageStyle: "",
    });

    // @ts-ignore
    return (
        <div className={clsx(styles.container, 'margin-vert--md', className)}>
            <i className="bi bi-calendar-date"></i>
            <DateTime date={date} formattedDate={formatDate(date)}/>
            {typeof readingTime !== 'undefined' && (
                <>
                    <Spacer/>
                    <i className="bi bi-book"></i>
                    <ReadingTime readingTime={readingTime}/>
                </>
            )}
            {typeof frontMatter['shortLink'] !== 'undefined' && isBlogPostPage && (
                <>
                    <Spacer/>
                    <i className="bi bi-link"></i>
                    <Link to={frontMatter['shortLink'] as string} className="text-truncate">
                        {frontMatter['shortLink'] as string}
                    </Link>
                </>
            )}
            {isBlogPostPage && (
                <>
                <span className="print-hidden">
                    <Spacer/>
                    <i className="bi bi-printer"></i>
                    <a href="javascript:void(0)" onClick={(_) => reactToPrintFn()}>
                        <Translate id="print"></Translate>
                    </a>
                </span>
                </>
            )}
        </div>
    );
}
