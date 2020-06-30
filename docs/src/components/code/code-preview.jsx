import React from 'react';
import classNames from 'classnames';
import CodeBlock from './code-block';
import JsxParser from 'react-jsx-parser';
import './code.scss';

const CodePreview = props => {
  const { codeString, bgColor, center } = props;

  const parseCode = string => {
    return <JsxParser renderInWrapper={false} jsx={string} />;
  };

  const getBgColorMap = bgColorObject => {
    const splittedBgColorObject = bgColorObject.split('.');

    return {
      theme: splittedBgColorObject[0],
      shade: splittedBgColorObject[1],
    };
  };

  const getBgColorClass = bgColor => {
    if (bgColor) {
      const bgColorMap = getBgColorMap(bgColor);
      const bgColorThemeClass = bgColorMap.theme;
      const bgColorShadeClass = bgColorMap.shade ? `-${bgColorMap.shade}` : '';

      return `BgColor-${bgColorThemeClass}${bgColorShadeClass}`;
    }
  };

  const cssClasses = {
    codePreview: classNames(`CodePreview`),
    codePreviewDisplay: classNames({
      [`CodePreview-display`]: true,
      [getBgColorClass(bgColor)]: !!bgColor,
    }),
    codePreviewDisplayContainer: classNames({
      [`CodePreview-displayContainer`]: true,
      [`CodePreview-displayContainer--center`]: center,
    }),
  };

  return (
    <div className={cssClasses.codePreview}>
      <div className={cssClasses.codePreviewDisplay}>
        <div className={cssClasses.codePreviewDisplayContainer}>{parseCode(codeString)}</div>
      </div>
      <CodeBlock {...props} className="CodePreview-codeBlock" />
    </div>
  );
};

export default CodePreview;
