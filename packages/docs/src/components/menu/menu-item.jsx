import React from 'react';
import classNames from 'classnames';
import './menu.scss';

const defaultProps = {
  tag: 'li',
};

const MenuItem = props => {
  const { tag: Tag, className, children, isCategory, ...attributes } = props;
  const cssClasses = classNames({
    'Menu-item': true,
    'Menu-item--category': isCategory,
    className,
  });

  attributes.className = cssClasses;

  return <Tag {...attributes}>{children}</Tag>;
};

MenuItem.defaultProps = defaultProps;

export default MenuItem;
