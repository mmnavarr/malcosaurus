module.exports = {
  title: 'Blog',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'mmnavarr', // Usually your GitHub org/user name.
  projectName: 'malcosaurus', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    navbar: {
      title: 'Malcolm Navarro',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          to: '/',
          label: 'Blog',
          position: 'left'
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
    gtag: {
      trackingID: 'UA-178851346-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogDescription: 'A docusaurus powered blog!',

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
