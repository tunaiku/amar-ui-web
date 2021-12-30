import React from 'react';
import classNames from 'classnames';
import './code-preview.scss';

const CodePreviewContainer = ({ tag: Tag = 'div', className, ...rest }) => {
  const cssClasses = {
    CodePreview: classNames(className, 'CodePreview'),
  };

  return <Tag className={cssClasses['CodePreview']} {...rest} />;
};

export default CodePreviewContainer;
