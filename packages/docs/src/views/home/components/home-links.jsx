import React from 'react';
import { LinkCard } from 'components/link-card';
import { Figure } from 'components/figure';
import GettingStartedImg from 'images/home-getting-started.svg';
import ComponentsImg from 'images/home-components.svg';
import FoundationsImg from 'images/home-foundations.svg';
import UtilitiesImg from 'images/home-utilities.svg';

const HomeLinks = () => {
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

  return (
    <div className="Grids">
      {links.map(link => (
        <div className="Grid Grid-12 Grid-md-6 Grid-lg-4 MarginBottom-large Flex FlexGrow-1">
          <LinkCard to={link.path} className="Flex FlexGrow-1">
            <div className="Card Card--elevated Flex FlexGrow-1 ">
              <div className="Card-media">
                <Figure
                  src={link.imgPath}
                  className="BgColor-secondary-90 Padding-large"
                  style={{ height: '250px' }}
                />
              </div>
              <div className="Card-block FlexGrow-1 PaddingBottom-xlarge">
                <h4 className="Typography-heading20 MarginBottom-2xsmall">{link.title}</h4>
                <p className="Typography-regular14 Color-neutral-80">{link.description}</p>
              </div>
            </div>
          </LinkCard>
        </div>
      ))}
    </div>
  );
};

export default HomeLinks;
