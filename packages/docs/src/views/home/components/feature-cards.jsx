import React from 'react';
import { LinkCards } from 'components/link-cards';
import GettingStartedImg from 'images/home-getting-started.svg';
import ComponentsImg from 'images/home-components.svg';
import FoundationsImg from 'images/home-foundations.svg';
import UtilitiesImg from 'images/home-utilities.svg';

const FeatureCards = () => {
  const links = [
    {
      title: 'Getting Started',
      path: '/getting-started',
      description: 'Find guide on the installation process step-by-step.',
      imgPath: GettingStartedImg,
    },
    {
      title: 'Components',
      path: '/components',
      description: 'Find classes of reusable components; like buttons, cards, etc.',
      imgPath: ComponentsImg,
    },
    {
      title: 'Foundations',
      path: '/foundations',
      description: 'Foundations that lay out the building blocks of the framework.',
      imgPath: FoundationsImg,
    },
    {
      title: 'Foundations',
      path: '/foundations',
      description: 'Foundations that lay out the building blocks of the framework.',
      imgPath: FoundationsImg,
    },
    {
      title: 'Utilities',
      path: '/utilities',
      description: 'Find utility classes to help with handling common use cases.',
      imgPath: UtilitiesImg,
    },
  ];

  return <LinkCards links={links} />;
};

export default FeatureCards;
