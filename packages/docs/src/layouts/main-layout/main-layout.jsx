/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { MainHeader } from './modules/components';
import useFontAwesomeLibrary from 'modules/fa-library.hook';
import 'styles/main.scss';
import './main-layout.scss';

const MainLayout = ({ children }) => {
  useFontAwesomeLibrary();

  return (
    <div className="Main">
      <MainHeader />
      <main className="Main-body">{children}</main>
    </div>
  );
};

export default MainLayout;
