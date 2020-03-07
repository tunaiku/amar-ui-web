import React from 'react';
import { Markdown } from 'components/markdown';
import { SEO } from 'components/seo';
import MainLayout from './main-layout';

const DocsLayout = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <MainLayout>
      <SEO title={frontmatter.title} />
      <div className="Container">
        <div className="DocsLayout">
          <div className="DocsLayout-body">
            <article className="DocsLayout-article">
              <div className="DocsLayout-heading MarginTop-3xlarge">
                <h1 className="Heading-1">{frontmatter.title}</h1>
                <p className="Heading-5 Color-neutral-80">{frontmatter.description}</p>
              </div>
              <Markdown className="DocsLayout-markdown">{mdx && body}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query DocsByPath($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        path
        title
        description
      }
      body
    }
  }
`;

export default DocsLayout;
