/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MainHeader } from './modules/components';
import useFontAwesomeLibrary from 'modules/fa-library.hook';
import 'styles/main.scss';
import './main-layout.scss';

const MainLayout = ({ children }) => {
  // Initializes icon library to use inside of the webapp.
  useFontAwesomeLibrary();

  return (
    <div className="Main">
      <MainHeader />
      <main className="Main-body">{children}</main>
    </div>
  );
};

export default MainLayout;
