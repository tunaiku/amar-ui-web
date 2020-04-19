import React from 'react';
import { LinkCard } from '../link-card';
import { Figure } from '../figure';

const LinkCards = ({ links }) => {
  return (
    <div className="Grids">
      {links.map(link => {
        const hasImage = link.imgPath;

        return (
          <div className="Grid Grid-12 Grid-md-6 Grid-lg-4 MarginBottom-large Flex FlexGrow-1">
            <LinkCard to={link.path} className="Flex FlexGrow-1">
              <div className="Card Card--elevated Flex FlexGrow-1 ">
                {hasImage && (
                  <div className="Card-media">
                    <Figure
                      src={link.imgPath}
                      className="BgColor-secondary-90 Padding-large"
                      style={{ height: '250px' }}
                    />
                  </div>
                )}

                <div className="Card-block FlexGrow-1 PaddingBottom-xlarge">
                  <h4 className="Typography-heading20 MarginBottom-2xsmall">{link.title}</h4>
                  <p className="Typography-regular14 Color-neutral-80">{link.description}</p>
                </div>
              </div>
            </LinkCard>
          </div>
        );
      })}
    </div>
  );
};

export default LinkCards;
