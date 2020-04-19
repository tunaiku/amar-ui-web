import React from 'react';
import { LinkCards } from 'components/link-cards';

const FoundationCards = () => {
  const links = [
    {
      title: 'Color System',
      path: '/foundations/color-system',
      description: 'The unified color language of Amar UI.',
    },
    {
      title: 'Responsive',
      path: '/foundations/responsive',
      description: 'A set of utilities to help achieve responsive design.',
    },
    {
      title: 'Typography',
      path: '/foundations/typography',
      description:
        'Classes and styles to assist you in crafting consistent and harmonious typography content.',
    },
  ];

  return <LinkCards links={links} />;
};

export default FoundationCards;
