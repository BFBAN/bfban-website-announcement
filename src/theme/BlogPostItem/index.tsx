import React, {type ReactNode, useRef} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '../BlogPostItem/Container';
import BlogPostItemHeader from '../BlogPostItem/Header';
import BlogPostItemContent from '../BlogPostItem/Content';
import BlogPostItemFooter from '../BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';
import SpotlightCard from '@site/src/components/_SpotlightCard';

// apply a bottom margin in list view
function useContainerClassName() {
    const {isBlogPostPage} = useBlogPost();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}: Props): ReactNode {
    const {isBlogPostPage} = useBlogPost();
    const containerClassName = useContainerClassName();
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="mb-4" ref={contentRef}>
            <SpotlightCard className="custom-spotlight-card card h-100 rounded-2"
                           disabled={isBlogPostPage}
                           spotlightColor="rgb(from var(--ifm-color-primary-lightest) r g b / .3)">
                <BlogPostItemContainer
                    className={clsx("overflow-hidden " + containerClassName, className + ` ${isBlogPostPage ? 'p-sm-4 p-lg-5 p-4' : 'p-4'}`)}>
                    <BlogPostItemHeader printRef={contentRef}/>
                    <BlogPostItemContent>{children}</BlogPostItemContent>
                    <BlogPostItemFooter/>
                </BlogPostItemContainer>
            </SpotlightCard>
        </div>
);
}
