import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarItem } from 'components/navbar';
import './main-header.scss';

const MainHeader = () => {
  return (
    <div className="Main-header MainHeader">
      <div className="MainHeader-brand">
        <Link to="/" className="MainHeader-brandTitle">
          Amar UI Web
        </Link>
      </div>
      <div className="MainHeader-nav">
        <div className="Flex JustifyContent-between FlexGrow-1">
          <Navbar>
            <NavbarItem>
              <Link to="/getting-started" activeClassName="is-active">
                Getting Started
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/components" activeClassName="is-active" partiallyActive={true}>
                Components
              </Link>
            </NavbarItem>
          </Navbar>
          <Navbar>
            <NavbarItem>
              <Link to="/github">🌙 Github</Link>
            </NavbarItem>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
