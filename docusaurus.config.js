module.exports = {
  title: 'Malcosaurus',
  tagline: '',
  url: 'https://malcosaurus.com',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'mmnavarr', // Usually your GitHub org/user name.
  projectName: 'malcosaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark', // "light" | "dark"
    },
    sidebarCollapsible: false, // Remove when there are a lot of docs
    navbar: {
      title: 'Malcolm Navarro',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          position: 'left',
          label: 'Notes',
        },
        {
          to: '/',
          position: 'left',
          label: 'Blog',
        },
        {
          href: 'https://github.com/mmnavarr/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/malcolmnavarro/',
          label: 'LinkedIn',
          position: 'right'
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        pages: false,
        blog: {
          showReadingTime: true,
          blogDescription: 'A docusaurus powered blog!',
          postsPerPage: 5,

          // Make blog the default page https://v2.docusaurus.io/docs/blog#blog-only-mode
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
