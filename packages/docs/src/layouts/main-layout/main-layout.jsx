/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { MainHeader } from './modules/components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import 'styles/main.scss';
import './main-layout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="Main">
      <MainHeader />
      <main className="Main-body">{children}</main>
    </div>
  );
};

export default MainLayout;
