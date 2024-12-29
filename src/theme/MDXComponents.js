import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Importance from '@site/src/components/Importance';
import Color from "@site/src/components/Color";

export default {
    ...MDXComponents,
    Highlight,
    H: Highlight,
    Importance,
    Imp: Importance,
    Color,
    C: Color,
};
