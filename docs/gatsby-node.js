const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
              title
              description
              parent
            }
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: path.resolve(`./src/layouts/docpage-layout/docpage-layout.jsx`),
      context: { id: node.id },
    });
  });
};
