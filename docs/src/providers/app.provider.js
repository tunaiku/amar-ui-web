import { useLocation } from '@reach/router';
import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  isMenuToggled: false,
  toggleMenu: () => {},
});

const AppProvider = ({ children }) => {
  const location = useLocation();
  const [isMenuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    return setMenuToggled(!isMenuToggled);
  };

  const isNotAtHomePage = () => location.pathname !== '/';

  return (
    <AppContext.Provider value={{ isMenuToggled, isNotAtHomePage, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
