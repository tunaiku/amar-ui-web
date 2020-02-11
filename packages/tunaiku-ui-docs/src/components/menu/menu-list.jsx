import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  tag: 'ul',
};

const MenuList = ({ tag: Tag, className, children, ...attributes }) => {
  const cssClasses = classNames(`Menu-list`, className);

  return (
    <Tag {...attributes} className={cssClasses}>
      {children}
    </Tag>
  );
};

MenuList.defaultProps = defaultProps;

export default MenuList;
