import React from 'react';
import classNames from 'classnames';
import './code-preview.scss';

const CodePreviewContainer = props => {
  const { tag: Tag, className, ...rest } = props;

  const cssClasses = {
    codePreview: classNames(className, 'CodePreview'),
  };

  return <Tag className={cssClasses['codePreview']} {...rest} />;
};

CodePreviewContainer.defaultProps = {
  tag: 'div',
};

export default CodePreviewContainer;
