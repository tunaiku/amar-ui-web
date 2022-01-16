import { createContext } from 'react';

const AppContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export default AppContext;
