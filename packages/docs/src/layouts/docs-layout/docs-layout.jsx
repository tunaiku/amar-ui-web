import React from 'react';
import MainLayout from '../main-layout/main-layout';
import { Markdown } from 'components/markdown';
import { SEO } from 'components/seo';
import { DocsSidebar } from './modules/components';
import './docs-layout.scss';

const DocsLayout = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <MainLayout>
      <SEO title={frontmatter.title} />
      <div className="Docs">
        <DocsSidebar />
        <div className="Docs-content">
          <div className="Container">
            <div className="Docs-article">
              <header className="Docs-headline">
                <h1 className="Heading-1 MarginBottom-small FontSize-5xlarge">
                  {frontmatter.title}
                </h1>
                <p className="Heading-4 Color-neutral-70">{frontmatter.description}</p>
              </header>
              <div className="Docs-markdown">
                <Markdown>{mdx && body}</Markdown>
              </div>
            </div>
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
