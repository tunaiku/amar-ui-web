import React from 'react';
import './markdown.scss';
import { preToCodeBlock } from 'mdx-utils';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { CodeBlock } from '../code-block';
import { CodePreview } from '../code-preview';

const Markdown = ({ children }) => {
  const transformTableMarkdown = () => props => {
    return (
      <div className="Table">
        <table {...props} />
      </div>
    );
  };

  const transformPreMarkdown = () => props => {
    const newProps = preToCodeBlock(props);

    if (newProps) {
      if (newProps.preview) {
        return <CodePreview {...newProps} />;
      }

      return <CodeBlock {...newProps} />;
    }

    return <pre {...props} />;
  };

  const markdownComponents = {
    table: transformTableMarkdown(),
    pre: transformPreMarkdown(),
  };

  return (
    <div className="Markdown">
      <MDXProvider components={markdownComponents}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default Markdown;
