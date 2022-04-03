import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        titleTemplate
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();
  const { defaultTitle, titleTemplate, siteUrl, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
    </Helmet>
  );
};

export default SEO;
