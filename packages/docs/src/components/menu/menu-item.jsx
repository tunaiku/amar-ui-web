import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  tag: 'li',
};

const MenuItem = ({ tag: Tag, className, children, ...attributes }) => {
  const cssClasses = classNames(`Menu-item`, className);

  return (
    <Tag {...attributes} className={cssClasses}>
      {children}
    </Tag>
  );
};

MenuItem.defaultProps = defaultProps;

export default MenuItem;
