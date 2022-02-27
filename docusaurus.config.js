// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("./src/prism/themes/nord");
const sectionPrefix = require("./src/remark/section-prefix");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kyo-blog",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "kyo-blog", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          lastVersion: "current",
          sidebarPath: require.resolve("./sidebars.js"),
          beforeDefaultRemarkPlugins: [sectionPrefix],
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      hideableSidebar: true,
      navbar: {
        title: "Kyo-Young",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/avatar.svg",
        // }
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/language/intro", // ./docs-api/Intro.md
            label: "Language",
            position: "left",
            activeBaseRegex: `/language/`,
          },
          {
            to: "/react-tutorial/intro", // ./docs-system/Intro.md
            label: "React Tutorial",
            position: "left",
            activeBaseRegex: `/react-tutorial/`,
          },
          {
            href: "https://github.com/youngkyo0504",
            label: "GitHub",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "ETC",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     // {
          //     //   label: "Blog",
          //     //   to: "/blog",
          //     // },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "language",
        path: "language",
        routeBasePath: "language",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react-tutorial",
        path: "react-tutorial",
        routeBasePath: "react-tutorial",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

module.exports = config;
