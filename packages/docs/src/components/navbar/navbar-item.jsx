import React from 'react';
import classNames from 'classnames';
import './navbar.scss';

const defaultProps = {
  tag: 'li',
};

const NavbarItem = props => {
  const { tag: Tag, className, children, ...attributes } = props;
  const cssClasses = classNames({
    'Navbar-item': true,
    className,
  });

  attributes.className = cssClasses;

  return <Tag {...attributes}>{children}</Tag>;
};

NavbarItem.defaultProps = defaultProps;

export default NavbarItem;
