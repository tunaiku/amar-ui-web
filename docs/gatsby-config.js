module.exports = {
  siteMetadata: {
    title: 'Amar UI Web',
    description:
      '⚡️ CSS library of components, layouts and utilities based on Amar Design System ⚡️',
    author: `David Kurnia Kristiadi @dkk94`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docpages',
        path: `${__dirname}/src/docpages`,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': `${__dirname}/src`,
          '@components': `${__dirname}/src/components`,
          '@layouts': `${__dirname}/src/layouts`,
          '@contexts': `${__dirname}/src/contexts`,
          '@pages': `${__dirname}/src/pages`,
          '@styles': `${__dirname}/src/styles`,
          '@utilities': `${__dirname}/src/utilities`,
        },
      },
    },
  ],
};
