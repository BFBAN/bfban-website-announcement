import React, {type ReactNode} from 'react';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '../BlogPostItem';
import type {Props} from '@theme/BlogPostItems';

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): ReactNode {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      {items.map(({content: BlogPostContent}) => (
          <BlogPostProvider
              key={BlogPostContent.metadata.permalink}
              content={BlogPostContent}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
      ))}
    </div>
  );
}
