import React, { useContext } from 'react';
import { Link } from 'gatsby';
import AppContext from '@contexts/app.context';
import '@styles/index.scss';

import './app-layout.scss';

const AppLayout = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navbar">
          <div className="Container Flex JustifyContent-between">
            <div className="Flex JustifyContent-center AlignItems-center">
              <div
                className="Navbar-menuIcon Icon Icon--medium"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div className="Navbar-logo">Amar UI</div>
            </div>
            <div className="Navbar-menu">
              <div className="Navbar-link">
                <Link to="/getting-started" activeClassName="is-active" partiallyActive>
                  Getting Started
                </Link>
              </div>
              <div className="Navbar-link">
                <Link to="/components" activeClassName="is-active" partiallyActive>
                  Components
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="App-body">{children}</div>
    </div>
  );
};

export default AppLayout;
