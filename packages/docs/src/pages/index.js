import React from 'react';

import { MainLayout } from 'layouts/main-layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <div className="HomePage">
      <section className="PaddingTop-3xlarge PaddingBottom-3xlarge">
        <div className="Container">
          <div className="Hero-content">
            <div className="MarginBottom-xlarge" style={{ width: '640px' }}>
              <h1 className="Heading-1">Amar UI Web</h1>
              <p className="Heading-4 Color-neutral-80">
                CSS Framework for crafting beautiful UI components and layouts based on Amar Design
                System.
              </p>
            </div>
            <div className="Flex">
              <button className="MarginRight-small Button Button--primary Button--elevated">
                Let's get started!
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="PaddingTop-xlarge PaddingBottom-xlarge">
        <div className="Container">
          <div className="Grids">
            <div className="Grid Grid-4 Flex FlexGrow-1">
              <div className="Card Card--elevated Flex FlexGrow-1">
                <div className="Card-block FlexGrow-1">
                  <h5 className="Heading-5 MarginBottom-2xsmall">Get Started</h5>
                  <p>Get the correct tools, see installation step-by-step.</p>
                </div>
                <div className="Card-block Flex JustifyContent-end">
                  <button className="Button Button--small Button--primary">Go to docs</button>
                </div>
              </div>
            </div>
            <div className="Grid Grid-4 Flex FlexGrow-1">
              <div className="Card Card--elevated Flex FlexGrow-1">
                <div className="Card-block FlexGrow-1">
                  <h5 className="Heading-5 MarginBottom-2xsmall">Components</h5>
                  <p>From buttons, cards to bottom sheet, we have it all covered!</p>
                </div>
                <div className="Card-block Flex JustifyContent-end">
                  <button className="Button Button--small Button--primary">Go to docs</button>
                </div>
              </div>
            </div>
            <div className="Grid Grid-4">
              <div className="Card Card--elevated">
                <div className="Card-block">
                  <h5 className="Heading-5 MarginBottom-2xsmall">Layouts</h5>
                  <p>
                    Several APIs to help you structure your layouts easily to make sure they don't
                    crumble apart!
                  </p>
                </div>
                <div className="Card-block Flex JustifyContent-end">
                  <button className="Button Button--small Button--primary">Go to docs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
);

export default IndexPage;
