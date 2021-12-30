const rehypeSlug = require('rehype-slug');

module.exports = {
  siteMetadata: {
    title: 'Amar UI Web',
    description: 'Documentation of every component, patterns, and tools of Amar UI.',
    author: 'Front-end Engineering Team at Amar Bank',
    menuLinks: [
      {
        name: 'Getting Started',
        path: '/getting-started',
        sortChildren: false,
        children: [
          {
            name: 'Getting Started',
            path: '/getting-started',
          },
          {
            name: 'Naming Convention',
            path: '/getting-started/naming-convention',
          },
        ],
      },
      {
        name: 'Components',
        path: '/components',
        sortChildren: true,
        children: [
          {
            name: 'Card',
            path: '/components/card',
          },
          {
            name: 'Button',
            path: '/components/button',
          },
          {
            name: 'Top Bar',
            path: '/components/top-bar',
          },
          {
            name: 'Bottom Bar',
            path: '/components/bottom-bar',
          },
          {
            name: 'Input',
            path: '/components/input',
          },
          {
            name: 'Field',
            path: '/components/field',
          },
          {
            name: 'Select',
            path: '/components/select',
          },
          {
            name: 'Dialog',
            path: '/components/dialog',
          },
          {
            name: 'Bottom Sheet',
            path: '/components/bottom-sheet',
          },
          {
            name: 'Snackbar',
            path: '/components/snackbar',
          },
          {
            name: 'Radio',
            path: '/components/radio',
          },
          {
            name: 'Checkbox',
            path: '/components/checkbox',
          },
          {
            name: 'Breadcrumbs',
            path: '/components/breadcrumbs',
          },
          {
            name: 'Table',
            path: '/components/table',
          },
          {
            name: 'Pagination',
            path: '/components/pagination',
          },
          {
            name: 'Tips',
            path: '/components/tips',
          },
          {
            name: 'Alert Box',
            path: '/components/alert-box',
          },
          {
            name: 'Stepper',
            path: '/components/stepper',
          },
          {
            name: 'Icons',
            path: '/components/icons',
          },
          {
            name: 'Header Card',
            path: '/components/header-card',
          },
          {
            name: 'Tes',
            path: '/components/tes',
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': `${__dirname}/src`,
          '@components': `${__dirname}/src/components`,
          '@pages': `${__dirname}/src/pages`,
          '@modules': `${__dirname}/src/modules`,
          '@styles': `${__dirname}/src/styles`,
          '@layouts': `${__dirname}/src/layouts`,
          '@utilities': `${__dirname}/src/utilities`,
          '@providers': `${__dirname}/src/providers`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['../node_modules'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        rehypePlugins: [rehypeSlug],
        defaultLayouts: {
          default: require.resolve('./src/layouts/docpage/docpage-layout.jsx'),
        },
      },
    },
  ],
};
