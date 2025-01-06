import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '../BlogPostItem/Container';
import BlogPostItemHeader from '../BlogPostItem/Header';
import BlogPostItemContent from '../BlogPostItem/Content';
import BlogPostItemFooter from '../BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';

// apply a bottom margin in list view
function useContainerClassName() {
    const {isBlogPostPage} = useBlogPost();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}: Props): ReactNode {
    const {isBlogPostPage} = useBlogPost();
    const containerClassName = useContainerClassName();

    return (
        <div className="mb-4">
            <BlogPostItemContainer
                className={clsx("card h-100 overflow-hidden rounded-2 " + containerClassName, className + ` ${isBlogPostPage ? 'p-sm-4 p-lg-5 p-4' : 'p-4'}`)}>
                <BlogPostItemHeader/>
                <BlogPostItemContent>{children}</BlogPostItemContent>
                <BlogPostItemFooter/>
            </BlogPostItemContainer>
        </div>
    );
}
