import React from 'react';
import classNames from 'classnames';
import './menu.scss';

const defaultProps = {
  tag: 'ul',
};

const Menu = props => {
  const { tag: Tag, className, children, ...attributes } = props;
  const cssClasses = classNames({ Menu }, className);

  attributes.className = cssClasses;

  return <Tag {...attributes}>{children}</Tag>;
};

Menu.defaultProps = defaultProps;

export default Menu;
