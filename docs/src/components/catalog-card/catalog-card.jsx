import React from 'react';
import './catalog-card.scss';

const CatalogCard = ({ title, description }) => {
  return (
    <div className="CatalogCard">
      <div className="CatalogCard-title">{title}</div>
      <div className="CatalogCard-description">{description}</div>
    </div>
  );
};

export default CatalogCard;
