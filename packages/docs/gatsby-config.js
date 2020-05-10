module.exports = {
  siteMetadata: {
    title: 'Amar UI Web',
    description: '⚡️ CSS library of components, layouts and utilities based on Amar Design System',
    author: `David Kurnia Kristiadi @dkk94`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['../../node_modules'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': `${__dirname}/src`,
          '@components': `${__dirname}/src/components`,
          '@layouts': `${__dirname}/src/layouts`,
          '@modules': `${__dirname}/src/modules`,
          '@pages': `${__dirname}/src/pages`,
          '@styles': `${__dirname}/src/styles`,
          '@utilities': `${__dirname}/src/utilities`,
        },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: require.resolve('./src/layouts/docs-layout.jsx'),
    //     extensions: ['.mdx', '.md'],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: 'language-',
    //           aliases: {},
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        rehypePlugins: [require('rehype-slug')],
        defaultLayouts: {
          default: require.resolve('./src/layouts/docs-layout/docs-layout.jsx'),
        },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
