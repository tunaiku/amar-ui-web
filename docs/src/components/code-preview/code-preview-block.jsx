import React from 'react';
import classNames from 'classnames';
import { CodeBlock } from '@components/code-block';
import './code-preview.scss';

const CodePreviewBlock = props => {
  const cssClasses = {
    codePreviewCodeBlock: classNames({
      [`CodePreview-codeBlock`]: true,
    }),
  };

  return <CodeBlock {...props} className={cssClasses.codePreviewCodeBlock} />;
};

export default CodePreviewBlock;
