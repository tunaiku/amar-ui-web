import React from 'react';
import classNames from 'classnames';

const Menu = ({ tag: Tag, className, children, ...attributes }) => {
  const cssClasses = classNames(`Menu`, className);

  return (
    <Tag {...attributes} className={cssClasses}>
      {children}
    </Tag>
  );
};

export default Menu;
