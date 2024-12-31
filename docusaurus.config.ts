import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as BlogPluginOptions} from "@docusaurus/plugin-content-blog";

const badges = [
    'https://github.com/BFBAN/bfban-website-announcement/actions/workflows/deploy.yml/badge.svg?branch=main',
    'https://img.shields.io/github/contributors/bfban/bfban-website-announcement'
]

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
        defaultLocale: 'zh',
        locales: ['zh', 'en'],
        localeConfigs: {
            en: {
                label: 'English',
                path: 'en-US',
            },
            zh: {
                label: '中文',
                path: 'zh-CN',
            },
        },
    },

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            crossOrigin: "anonymous"
        }, {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css'
        }
    ],

    scripts: [
        {
            src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
            crossOrigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
            crossOrigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
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
            '@docusaurus/plugin-content-blog',
            {
                // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog
                id: 'precepts',
                routeBasePath: 'precepts',
                path: './precepts',
                blogSidebarCount: 'ALL',
                blogTitle: "准则",
                blogDescription: "准则列表",
                showReadingTime: false,
                showLastUpdateTime: false,
                feedOptions: {
                    type: ['rss', 'atom'],
                    xslt: true,
                },
                // blogListComponent: '@theme/BlogListPage',
                // blogPostComponent: '@theme/BlogPostPage',
                // blogTagsListComponent: '@theme/BlogTagsListPage',
                // blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                authorsMapPath: '../authors.yml',
                onInlineTags: 'ignore',
                onInlineAuthors: 'ignore',
                onUntruncatedBlogPosts: 'ignore',
            } satisfies BlogPluginOptions
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'main',
                routeBasePath: 'blog',
                path: './blog',
                authorsMapPath: '../authors.yml',
                onInlineTags: 'ignore',
                onInlineAuthors: 'ignore',
                onUntruncatedBlogPosts: 'ignore',
            } satisfies BlogPluginOptions,
        ]
    ],

    themeConfig: {
        navbar: {
            title: 'BFBAN',
            logo: {
                alt: 'logo',
                src: 'img/logo.png',
                className: 'rounded-5',
                style: {
                    'width': '35px',
                    'height': '35px'
                }
            },
            items: [
                {href: 'https://bfban.com', target: '_self', label: 'mainWebsite', position: 'left'},
                {to: '/precepts', label: 'precepts', position: 'left'},
                {to: '/blog', label: 'blog', position: 'left'},
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
                    title: " ",
                    items: [
                        {
                            prependBaseUrlToHref: '',
                            html: "<p align='left'><a href='https://bfban.com'><img height='40px' src='https://bfban.com/assets/img/friendly-web.16e0cc25.png' /></a></p>"
                        },
                        {
                            prependBaseUrlToHref: '',
                            html: `<p align='left'><span class="fw-bold">©Bfban Website Announcement</span> <br/><span class="opacity-50 fw-light">2022-${new Date().getFullYear()}</span></p>`
                        }
                    ]
                },
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
                            href: "services@bfban.com"
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
                },
                {
                    items: [
                        {
                            html: "<p><iframe src=\"https://status.bfban.com/badge\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" width='100%' height='30px'></iframe></p>"
                        },
                        ...badges.map((i) => {
                            return {
                                html: `<img src="${i}" />`
                            };
                        }),
                        {
                            html: '<hr class="m-0 mt-2 mb-2" />'
                        },
                        {
                            html: '<img height="40" src="https://bfban.com/images/links/cloudflare-pages.svg">'
                        }

                    ]
                }
            ]
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
