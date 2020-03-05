import React from 'react';

import MainLayout from '../layouts/main-layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <div className="HomePage">
      <section className="BgColor-primary Color-light PaddingTop-3xlarge PaddingBottom-3xlarge">
        <div className="Container">
          <div className="Hero-content">
            <div className="MarginBottom-xlarge">
              <h1 className="Heading-1">Tunaiku UI Library</h1>
              <p>
                Sint nulla ea officia incididunt in nisi id adipisicing reprehenderit adipisicing
                quis.
              </p>
            </div>
            <button className="Button Button--light Button--outlined">See Docs</button>
          </div>
        </div>
      </section>
      <section className="Section PaddingTop-2xlarge PaddingBottom-2xlarge">
        <div className="Container">
          <h2 className="Heading-2 MarginBottom-xlarge">Buttons</h2>
          <section className="MarginBottom">
            <h3 className="Heading-6 MarginBottom-2xsmall">Themed</h3>
            <button className="Button MarginRight">Default</button>
            <button className="Button Button--primary MarginRight">Primary</button>
            <button className="Button Button--secondary">Secondary</button>
          </section>
          <section className="MarginBottom">
            <h3 className="Heading-6 MarginBottom-2xsmall">Size</h3>
            <button className="Button Button--small Button--primary MarginRight">Small</button>
            <button className="Button Button--primary MarginRight">Default</button>
            <button className="Button Button--large Button--primary">Large</button>
          </section>
          <section>
            <h3 className="Heading-6 MarginBottom-2xsmall">With Elevation</h3>
            <button className="Button Button--primary Button--elevated">Elevated</button>
          </section>
        </div>
      </section>
      <section className="Section PaddingTop-2xlarge PaddingBottom-2xlarge">
        <div className="Container">
          <h2 className="Heading-2 MarginBottom-xlarge">Cards</h2>
          <section className="MarginBottom">
            <h3 className="Heading-5 MarginBottom-2xsmall">Example</h3>
            <div className="Grids">
              <div className="Grid-12 Grid-md-6 Grid-xl-4">
                <div className="Card Card--elevated">
                  <div className="Card-block">
                    <div className="MarginBottom-large">
                      <div className="FontSize-xlarge FontWeight-bold">Tagihan Saat Ini</div>
                      <div className="Color-gray-50">
                        Segera bayar tagihan untuk menghindari tunggakan biaya.
                      </div>
                    </div>
                  </div>
                  <div className="Card-block">
                    <div className="MarginBottom Flex JustifyContent-between Color-gray-50">
                      <div>Tagihan pokok bulan ini:</div>
                      <div className="FontWeight-bold">Rp 1.299.000</div>
                    </div>
                    <div className="Flex JustifyContent-between Color-gray-50">
                      <div>Jatuh tempo:</div>
                      <div className="FontWeight-bold">7 Februari 2020</div>
                    </div>
                  </div>
                  <div className="Card-block">
                    <div className="Flex JustifyContent-between">
                      <div className="FontSize-large FontWeight-bold Color-gray-50">
                        Total Tagihan:
                      </div>
                      <div className="FontSize-large FontWeight-bold">Rp 1.299.000</div>
                    </div>
                  </div>
                  <div className="Card-block Flex JustifyContent-between">
                    <button className="Button Button--large Button--primary Button--fullWidth">
                      Pay with TunaikuPay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Section PaddingTop-2xlarge PaddingBottom-2xlarge">
            <h2 className="Heading-2 MarginBottom-xlarge">Banners</h2>
            <div className="BgColor-lighter Padding-large">
              <div className="Banner Banner--white Color-gray-50">
                <div className="Banner-block MarginBottom">
                  <p>Ullamco dolore tempor aliqua magna nostrud quis anim commodo.</p>
                </div>
                <div className="Banner-actions Flex JustifyContent-end">
                  <button className="Button Button--text Button--secondary Text-uppercase FontSize-small Tracking-loose MarginRight-2xsmall">
                    Action 1
                  </button>
                  <button className="Button Button--text Button--secondary Text-uppercase FontSize-small Tracking-loose">
                    Action 2
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </MainLayout>
);

export default IndexPage;
