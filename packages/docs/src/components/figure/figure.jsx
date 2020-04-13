import React from 'react';
import cssClasses from './figure.module.scss';

const defaultProps = {
  tag: 'figure',
};

const Figure = props => {
  const { tag: Tag, attributes, ...rest } = props;

  return (
    <div className={cssClasses['Figure']}>
      <img {...rest} />
    </div>
  );
};

Figure.defaultProps = defaultProps;

export default Figure;
