import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
import classNames from 'classnames';
import { useLocation } from '@reach/router';
import AppContext from '@contexts/app.context';
import { Markdown } from '@components/markdown';

import { AppLayout } from '../app-layout';
import './docpage-layout.scss';

export const pageQuery = graphql`
  query DocpageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        path
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___parent, frontmatter___title], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            description
            path
            title
          }
        }
      }
    }
  }
`;

const DocpageLayout = ({ data: { mdx, allMdx } }) => {
  const location = useLocation();
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  return (
    <AppLayout>
      <div className={classNames('Docpage', isMenuOpen && 'is-menu-open')}>
        <div className="Container Flex">
          <div className="Docpage-sidebar">
            <div className="Sidenav">
              {allMdx.edges.map(({ node }) => {
                const { frontmatter } = node;
                const currentLocation = location.pathname;
                const pathArray = frontmatter.path.split('/');
                const categoryPath = pathArray[1];

                if (!currentLocation.includes(categoryPath)) return;

                return (
                  <div className="Sidenav-item">
                    <Link
                      to={frontmatter.path}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="Sidenav-link"
                      activeClassName="is-active">
                      {frontmatter.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="Docpage-body">
            <h1 className="Docpage-title">{mdx.frontmatter.title}</h1>
            <h2 className="Docpage-description">{mdx.frontmatter.description}</h2>
            <div className="Docpage-content">
              <Markdown>{mdx.body}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DocpageLayout;
