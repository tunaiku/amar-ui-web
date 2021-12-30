/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { LocationProvider } from '@reach/router';
import React from 'react';
import AppProvider from './src/providers/app.provider';

export const wrapRootElement = ({ element }) => (
  <LocationProvider>
    <AppProvider>{element}</AppProvider>
  </LocationProvider>
);
