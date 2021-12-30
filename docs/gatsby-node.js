/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(limit: 1000) {
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
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const docpageLayout = path.resolve('src/layouts/docpage/docpage-layout.jsx');
  const docpages = result.data.allMdx.edges;

  docpages.forEach(({ node }, index) => {
    const path = node.frontmatter.path;
    createPage({
      path,
      component: docpageLayout,
      context: {
        id: node.id,
      },
    });
  });
};
