import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import './link-card.scss';
// import cssClasses from './link-card.module.scss';

const LinkCard = ({ children, className, ...attributes }) => {
  const cssClasses = {
    LinkCard: classNames('LinkCard', className),
  };

  return (
    <Link className={cssClasses['LinkCard']} {...attributes}>
      {children}
    </Link>
  );
};

export default LinkCard;
