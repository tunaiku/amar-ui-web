/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="Main">
      <header className="Main-header"></header>
      <main className="Main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
