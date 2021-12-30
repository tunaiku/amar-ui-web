/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { createHistory, LocationProvider } from '@reach/router';
import React from 'react';
import AppProvider from './src/providers/app.provider';

export const wrapRootElement = ({ element }) => (
  <LocationProvider>
    <AppProvider>{element}</AppProvider>
  </LocationProvider>
);
