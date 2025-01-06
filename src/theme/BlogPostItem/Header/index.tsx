import React, {type ReactNode} from 'react';
import BlogPostItemHeaderTitle from '../Header/Title';
import BlogPostItemHeaderInfo from '../Header/Info';
import BlogPostItemHeaderAuthors from '../Header/Authors';
import ShareWidget from "@site/src/theme/BlogPostItem/Footer/Share";

export default function BlogPostItemHeader(): ReactNode {
    return (
        <header>
            <BlogPostItemHeaderTitle/>
            <ShareWidget/>
            <BlogPostItemHeaderInfo/>
            <BlogPostItemHeaderAuthors/>
        </header>
    );
}
