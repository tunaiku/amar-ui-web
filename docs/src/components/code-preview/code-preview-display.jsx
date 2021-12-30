import React from 'react';
import classNames from 'classnames';
import './code-preview.scss';

const CodePreviewDisplay = ({ bgColor, size, children }) => {
  const isCompactSized = !!size && size === 'compact';

  const cssClasses = {
    codePreviewDisplay: classNames('CodePreview-display', {
      'CodePreview-display--compact': isCompactSized,
    }),
  };

  return <div className={cssClasses['codePreviewDisplay']}>{children}</div>;
};

export default CodePreviewDisplay;
