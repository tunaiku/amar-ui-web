/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsTemplate = path.resolve(`src/layouts/docs-layout.jsx`);
  const allMdxQuery = `
    {
      allMdx {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
    }
  `;

  return graphql(allMdxQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: docsTemplate,
        context: { id: node.id },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
