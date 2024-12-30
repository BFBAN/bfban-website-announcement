import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Importance from '@site/src/components/Importance';
import Color from "@site/src/components/Color";
import GithubContributorsWidget from "@site/src/components/GithubContributorsWidget";

export default {
    ...MDXComponents,
    Highlight,
    H: Highlight,
    Importance,
    Imp: Importance,
    Color,
    C: Color,
    GithubContributorsWidget,
};
