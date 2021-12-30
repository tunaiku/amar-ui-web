import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { AppContext } from '@providers/app.provider';

const AppHeader = () => {
  const { toggleMenu, isNotAtHomePage } = useContext(AppContext);

  return (
    <header className="App-header AppHeader">
      <div className="Container Flex Height-full AlignItems-center">
        {isNotAtHomePage() && (
          <div className="AppHeader-menuToggler MarginRight AlignItems-center">
            <div
              class="Icon Icon--medium"
              onClick={toggleMenu}
              onKeyDown={toggleMenu}
              style={{ cursor: 'pointer' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </div>
          </div>
        )}

        <div className="AppHeader-logo">Amar UI</div>
        <ul className="AppHeader-nav">
          <li className="AppHeader-navItem">
            <Link to="/getting-started" activeClassName="is-active" partiallyActive>
              Getting Started
            </Link>
          </li>
          <li className="AppHeader-navItem">
            <Link to="/components" activeClassName="is-active" partiallyActive>
              Components
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
