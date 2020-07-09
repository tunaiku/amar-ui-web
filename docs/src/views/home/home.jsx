import React from 'react';
import { Link } from 'gatsby';
import { SEO } from 'components/seo';
import { MainLayout } from 'layouts/main-layout';
import HeroIllustration from 'images/amar-ui-hero.svg';
import { Figure } from 'components/figure';
import FeatureCards from './components/feature-cards';

import './home.scss';

const Home = () => (
  <MainLayout>
    <SEO title="Amar UI Web" />
    <div className="HomePage">
      <section className="HomePage-hero">
        <div className="HomePage-heroContent">
          <div className="Container">
            <div className="Grids JustifyContent-between AlignItems-center">
              <div className="Grid Grid-6">
                <div className="Flex-column AlignItems-center MarginRight">
                  <div className="MarginBottom-large">
                    <h1 className="FontSize-5xlarge MarginBottom">Amar UI Web</h1>
                    <p className="FontSize-2xlarge Color-neutral-20">
                      An <strong>open-source</strong> CSS Framework for crafting beautiful user
                      interfaces and experiences with Amar Design System as its foundation.
                    </p>
                  </div>
                  <Link
                    to="/introduction/getting-started"
                    className="Button Button--secondary MarginRight">
                    Getting Started
                  </Link>
                </div>
              </div>
              <div className="Grid Grid-5">
                <Figure src={HeroIllustration} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="PaddingTop-xlarge PaddingBottom-xlarge">
        <div className="Container">
          <div className="MarginTop-2xlarge MarginBottom-xlarge Flex Flex-column AlignItems-center">
            <h1>Based on Amar Design System</h1>
          </div>
          <FeatureCards />
        </div>
      </section>
    </div>
  </MainLayout>
);

export default Home;
