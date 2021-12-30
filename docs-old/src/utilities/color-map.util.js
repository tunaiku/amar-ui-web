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

export { getBgColorClass, getBgColorClass };
