import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { preToCodeBlock } from 'mdx-utils';
import { CodeBlock } from '@components/code-block';
import { CodePreview } from '@components/code-preview';

import './markdown.scss';

const Markdown = ({ children }) => {
  const transformCodeBlock = () => props => {
    const newProps = preToCodeBlock(props);
    // const hasNewProps = !!newProps;
    const isPreviewEnabled = !!newProps && !!newProps.preview;

    if (!isPreviewEnabled) {
      return <CodeBlock {...newProps} />;
    }

    if (isPreviewEnabled) {
      return <CodePreview {...newProps} />;
    }

    return <pre {...props} />;
  };

  const shortcodes = {
    pre: transformCodeBlock(),
  };

  return (
    <div className="Markdown">
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default Markdown;
