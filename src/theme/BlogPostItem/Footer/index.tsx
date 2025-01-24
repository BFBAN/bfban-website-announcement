import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import EditMetaRow from '@theme/EditMetaRow';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import ShareWidget from "@site/src/theme/Share";

export default function BlogPostItemFooter(): ReactNode {
    const {metadata, isBlogPostPage} = useBlogPost();
    const {
        tags,
        title,
        editUrl,
        hasTruncateMarker,
        lastUpdatedBy,
        lastUpdatedAt,
    } = metadata;

    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;

    const tagsExists = tags.length > 0;

    const renderFooter = tagsExists || truncatedPost || editUrl;

    if (!renderFooter) {
        return null;
    }

    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

        return (
            <footer className="docusaurus-mt-sm">
                {tagsExists && (
                    <div
                        className={clsx(
                            'row print-hidden',
                            'mt-3',
                            ThemeClassNames.blog.blogFooterEditMetaRow,
                        )}>
                        <div className="col blog-tags">
                            <i className="tags-icon bi bi-tags-fill"></i>
                            <TagsListInline tags={tags}/>
                        </div>
                    </div>
                )}
                {canDisplayEditMetaRow && (
                    <EditMetaRow
                        className={clsx(
                            'print-hidden',
                            'margin-top--sm',
                            ThemeClassNames.blog.blogFooterEditMetaRow,
                        )}
                        editUrl={editUrl}
                        lastUpdatedAt={lastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                    />
                )}
                <div className="margin-top--lg">
                    <ShareWidget/>
                </div>
            </footer>
        );
    }
    // BlogPost footer - list view
    else {
        return (
            <footer className="row docusaurus-mt-sm">
                {tagsExists && (
                    <div className={clsx('col', {'col--9': truncatedPost})}>
                        <TagsListInline tags={tags}/>
                    </div>
                )}
                {truncatedPost && (
                    <div
                        className={clsx('col text--right', {
                            'col--3': tagsExists,
                        })}>
                        <ReadMoreLink blogPostTitle={title} to={metadata.permalink}/>
                    </div>
                )}
            </footer>
        );
    }
}
