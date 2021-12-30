import React from 'react';
import { AppLayout } from '@layouts/app';
import { SEO } from '@components/seo';
import '@styles/index.scss';

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <div className="Container"></div>
  </AppLayout>
);

export default IndexPage;
