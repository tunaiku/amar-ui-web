import React, { useState } from 'react';
import AppContext from './app.context';

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
