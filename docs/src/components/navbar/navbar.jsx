import React from 'react';
import classNames from 'classnames';
import './navbar.scss';

const defaultProps = {
  tag: 'ul',
};

const Navbar = props => {
  const { tag: Tag, className, children, ...attributes } = props;
  const cssClasses = classNames({
    Navbar: true,
    className,
  });

  attributes.className = cssClasses;

  return <Tag {...attributes}>{children}</Tag>;
};

Navbar.defaultProps = defaultProps;

export default Navbar;
