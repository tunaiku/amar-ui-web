import React from 'react';
import AppProvider from './src/contexts/app.provider';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
