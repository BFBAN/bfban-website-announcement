import React, {type ReactNode} from 'react';
import BlogPostItemHeaderTitle from '../Header/Title';
import BlogPostItemHeaderInfo from '../Header/Info';
import BlogPostItemHeaderAuthors from '../Header/Authors';
import ShareWidget from "@site/src/theme/BlogPostItem/Footer/Share";
import {useBlogPost} from "@docusaurus/plugin-content-blog/client";

export default function BlogPostItemHeader(): ReactNode {
    const {isBlogPostPage} = useBlogPost();

    return (
        <header>
            <BlogPostItemHeaderTitle/>
            {isBlogPostPage ? <ShareWidget/> : null}
            <BlogPostItemHeaderInfo/>
            <BlogPostItemHeaderAuthors/>
        </header>
    );
}
