import React, { useContext } from 'react';
import classNames from 'classnames';
import { useLocation } from '@reach/router';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { sortObjectByPropertyAlphabetically } from '@utilities/object.util';
import { SEO } from '@components/seo';
import { CodePreview } from '@components/code-preview';
import { CodeBlock } from '@components/code-block';
import { AppLayout } from '@layouts/app';

import { AppContext } from '../../providers/app.provider';
import './docpage-layout.scss';

const DocpageLayout = ({
  data: {
    mdx: { frontmatter, body },
    site: {
      siteMetadata: { menuLinks },
    },
  },
}) => {
  const location = useLocation();
  const { isMenuToggled } = useContext(AppContext);

  const transformPreComponent = () => ({ children: { props } }) => {
    const { preview, children, className, ...restOfProps } = props;
    const isCodeBlock = !!props;
    const hasPreviewEnabled = !!preview;
    const hasLanguageClass = !!className;
    const language = hasLanguageClass && className.replace(/language-/, '');

    if (isCodeBlock && hasPreviewEnabled) {
      return <CodePreview codeString={children} language={language} {...restOfProps} />;
    }

    if (isCodeBlock && !hasPreviewEnabled) {
      return <CodeBlock codeString={children} language={language} {...restOfProps} />;
    }

    return <pre {...restOfProps} />;
  };

  const markdownComponents = {
    pre: transformPreComponent(),
  };

  return (
    <AppLayout>
      <SEO title={frontmatter.title} />
      <div className="Container">
        <div className={classNames('Docpage', isMenuToggled && 'is-menu-toggled')}>
          <ul className="DocpageMenu">
            {menuLinks
              .filter(menuLink => location.pathname.includes(menuLink.path))
              .map(menuLink => {
                const hasMenuChildren = !!menuLink?.children;
                const shouldSortChildren = !!menuLink?.sortChildren;

                if (!hasMenuChildren) return null;

                return menuLink.children
                  .sort((firstObject, secondObject) => {
                    if (!shouldSortChildren) return firstObject;
                    return sortObjectByPropertyAlphabetically(firstObject, secondObject, 'name');
                  })
                  .map((link, index) => (
                    <li key={index} className="DocpageMenu-item">
                      <Link to={link.path} activeClassName="is-active">
                        {link.name}
                      </Link>
                    </li>
                  ));
              })}
          </ul>
          <div className="DocpageArticle">
            <div className="DocpageArticle-headings">
              <h1 className="DocpageArticle-title">{frontmatter.title}</h1>
              <p className="DocpageArticle-description">{frontmatter.description}</p>
            </div>
            <div className="DocpageArticle-markdown">
              <MDXProvider components={markdownComponents}>
                <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const pageQuery = graphql`
  query DocsByPath($id: String) {
    site {
      id
      siteMetadata {
        menuLinks {
          name
          path
          sortChildren
          children {
            name
            path
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        path
        title
        description
      }
      timeToRead
    }
  }
`;

// const { site } = useStaticQuery(graphql`
//   query MyQuery {
//     site(siteMetadata: { menuLinks: {} }) {
//       id
//       siteMetadata {
//         menuLinks {
//           name
//           link
//           children {
//             name
//             link
//           }
//         }
//       }
//     }
//   }
// `);

export default DocpageLayout;
