import React from 'react';
import classNames from 'classnames';
import './code-preview.scss';

const CodePreviewDisplay = ({ bgColor, size, children }) => {
  const isCompactSized = !!size && size === 'compact';

  const getBgColorMap = bgColorObject => {
    const splittedBgColorObject = bgColorObject.split('.');

    return {
      theme: splittedBgColorObject[0],
      shade: splittedBgColorObject[1],
    };
  };

  const getBgColorClass = bgColor => {
    if (!!bgColor) {
      const bgColorMap = getBgColorMap(bgColor);
      const bgColorThemeClass = bgColorMap.theme;
      const bgColorShadeClass = bgColorMap.shade ? `-${bgColorMap.shade}` : '';

      return `BgColor-${bgColorThemeClass}${bgColorShadeClass}`;
    }
  };

  const cssClasses = {
    codePreviewDisplay: classNames('CodePreview-display', {
      [getBgColorClass(bgColor)]: !!bgColor,
      'CodePreview-display--compact': isCompactSized,
    }),
  };

  return <div className={cssClasses['codePreviewDisplay']}>{children}</div>;
};

export default CodePreviewDisplay;
