import React from 'react';
import AppProvider from './src/contexts/app.provider';
import './src/styles/index.scss';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
