simport React from 'react';
import './markdown.scss';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { CodeBlock } from '../code-block';
import { CodePreview } from '../code-preview';
import { preToCodeBlock } from 'mdx-utils';

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
    const hasNewProps = !!newProps;
    const isPreviewEnabled = !!newProps && !!newProps.preview;

    if (hasNewProps) {
      if (!isPreviewEnabled) {
        return <CodeBlock {...newProps} />;
      }

      return <CodePreview {...newProps} />;
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
