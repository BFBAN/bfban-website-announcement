import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as BlogPluginOptions} from "@docusaurus/plugin-content-blog";
import remarkGFM from "remark-gfm"

const config: Config = {
    title: 'BFBAN',
    tagline: '',
    favicon: 'img/favicon.ico',
    url: 'https://announcement.bfban.com',
    baseUrl: '/',

    organizationName: 'bfban',
    projectName: 'bfban-website-announcement',
    trailingSlash: false,

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN', 'en-US', 'ja-JP'],
        localeConfigs: {
            'en-US': {
                label: 'English',
                path: 'en-US',
            },
            'zh-CN': {
                label: '中文',
                path: 'zh-CN',
            },
            'ja-JP': {
                label: '日本语',
                path: 'ja-JP',
            },
        },
    },

    stylesheets: [
        {
            href: "/css/bootstrap@5.3.3.min.css",
            rel: "stylesheet",
            crossOrigin: "anonymous"
        }, {
            href: '/css/bootstrap-icons@1.10.4.css'
        }
    ],

    scripts: [
        {
            src: '/js/popper.min@2.11.8.js',
            crossOrigin: "anonymous"
        },
        {
            src: '/js/bootstrap@5.3.3.min.js',
            crossOrigin: "anonymous"
        },
        {
            src: '/js/bootstrap.bundle@5.3.3.min.js',
            crossOrigin: "anonymous"
        }
    ],

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: false,
                theme: {
                    customCss: [
                        './src/css/index.css',
                        './src/css/theme.css'
                    ],
                },
            },
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                remarkPlugins: [
                    [remarkGFM, {singleTilde: false}],
                    require('remark-breaks'),
                ],
                editUrl: 'https://github.com/BFBAN/bfban-website-announcement/edit/main/',
            },
        ],
        [
            '@docusaurus/plugin-sitemap',
            {
                id: 'sitemap-all',
                lastmod: 'date',
                changefreq: 'weekly',
                priority: 0.5,
                ignorePatterns: ['/tags/**'],
                filename: 'sitemap.xml',
                createSitemapItems: async (params) => {
                    const {defaultCreateSitemapItems, ...rest} = params;
                    const items = await defaultCreateSitemapItems(rest);
                    return items.filter((item) => !item.url.includes('/page/'));
                },
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog
                id: 'precepts',
                routeBasePath: 'precepts',
                path: './precepts',
                blogSidebarCount: 'ALL',
                feedOptions: {
                    type: ['rss', 'atom'],
                    xslt: true,
                },
                blogListComponent: '@theme/BlogListPage',
                blogPostComponent: '@theme/BlogPostPage',
                blogTagsListComponent: '@theme/BlogTagsListPage',
                // blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                authorsMapPath: '../authors.yml',
                onInlineTags: 'ignore',
                onInlineAuthors: 'ignore',
                onUntruncatedBlogPosts: 'ignore',
                remarkPlugins: [
                    [remarkGFM, {singleTilde: false}],
                    require('remark-breaks'),
                ],
                editUrl: 'https://github.com/BFBAN/bfban-website-announcement/edit/main/',
            } satisfies BlogPluginOptions
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'main',
                routeBasePath: 'blog',
                path: './blog',
                blogSidebarCount: 'ALL',
                feedOptions: {
                    type: ['rss', 'atom'],
                    xslt: true,
                },
                authorsMapPath: '../authors.yml',
                blogListComponent: '@theme/BlogListPage',
                blogPostComponent: '@theme/BlogPostPage',
                blogTagsListComponent: '@theme/BlogTagsListPage',
                // blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                onInlineTags: 'ignore',
                onInlineAuthors: 'ignore',
                onUntruncatedBlogPosts: 'ignore',
                remarkPlugins: [
                    [remarkGFM, {singleTilde: false}],
                    require('remark-breaks'),
                ],
                editUrl: 'https://github.com/BFBAN/bfban-website-announcement/edit/main/',
            } satisfies BlogPluginOptions,
        ],
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-JZ5QGTWE2R',
                anonymizeIP: true,
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'BFBAN',
            logo: {
                alt: 'logo',
                src: 'img/logo.png',
                className: 'rounded-5',
                style: {
                    'width': '40px',
                    'height': '40px',
                    'margin': '-5px 0'
                }
            },
            items: [
                {href: 'https://bfban.com', target: '_self', label: 'mainWebsite', position: 'left'},
                {to: '/precepts', label: 'precepts', position: 'left'},
                {to: '/blog', label: 'blog', position: 'left'},
                {to: '/docs', label: 'docs', position: 'left'},
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: "community",
                    items: [

                        {
                            label: "Gametool discord",
                            href: "https://discord.gametools.network"
                        },
                        {
                            label: "BFBAN bfvrobot kook",
                            href: "https://kook.top/6Q0FHY"
                        },
                        {
                            label: "github (website)",
                            href: "https://github.com/BFBAN/bfban-website"
                        },
                        {
                            label: "github (announcement)",
                            href: "https://github.com/BFBAN/bfban-website-announcement"
                        },
                    ]
                },
                {
                    title: "connection",
                    items: [
                        {
                            label: "contactUs",
                            href: "mailto:services@bfban.com"
                        },
                        {
                            label: "QQ Group",
                            href: "https://jq.qq.com/?_wv=1027&k=FY8TCpCV"
                        }
                    ]
                },
                {
                    title: "other",
                    items: [
                        {
                            label: "about",
                            href: "https://bfban.com/about"
                        },
                        {
                            label: "link",
                            href: "https://bfban.com/link"
                        }
                    ]
                }
            ]
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: 'JR8I8HE5WG',
            apiKey: '497e426cd188a0ee4d912b6081601b1f',
            indexName: 'announcement-bot'
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
