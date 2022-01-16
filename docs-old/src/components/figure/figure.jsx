import React from 'react';
import classNames from 'classnames';
import './figure.scss';

const defaultProps = {
  tag: 'figure',
};

const Figure = props => {
  const { tag: Tag, attributes, ...rest } = props;

  const cssClasses = {
    Figure: classNames('Figure'),
  };

  return (
    <div className={cssClasses['Figure']}>
      <img {...rest} />
    </div>
  );
};

Figure.defaultProps = defaultProps;

export default Figure;
