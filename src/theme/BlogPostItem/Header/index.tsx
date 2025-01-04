import React, {type ReactNode} from 'react';
import BlogPostItemHeaderTitle from '../Header/Title';
import BlogPostItemHeaderInfo from '../Header/Info';
import BlogPostItemHeaderAuthors from '../Header/Authors';

export default function BlogPostItemHeader(): ReactNode {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
