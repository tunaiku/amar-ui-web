import React from 'react';
import classNames from 'classnames';
import CodeBlock from './code-block';
import JsxParser from 'react-jsx-parser';
import './code.scss';

const CodePreview = props => {
  const { codeString, bgColor, size } = props;

  const parsedCode = () => {
    return <JsxParser renderInWrapper={false} jsx={codeString} />;
  };

  const cssClasses = {
    codePreview: classNames(`CodePreview`),
    codePreviewDisplay: classNames({
      [`CodePreview-display`]: true,
      [`BgColor-${bgColor}`]: bgColor,
    }),
    codePreviewDisplayContainer: classNames({
      [`CodePreview-displayContainer`]: true,
      [`CodePreview-displayContainer--${size}`]: size,
    }),
  };

  return (
    <div className={cssClasses.codePreview}>
      <div className={cssClasses.codePreviewDisplay}>
        <div className={cssClasses.codePreviewDisplayContainer}>{parsedCode()}</div>
      </div>
      <CodeBlock {...props} className="CodePreview-codeBlock" />
    </div>
  );
};

export default CodePreview;
