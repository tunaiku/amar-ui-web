import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarItem } from '@components/navbar';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import './main-header.scss';

const MainHeader = () => {
  return (
    <div className="Main-header MainHeader">
      <div className="MainHeader-brand">
        <Link to="/" className="MainHeader-brandTitle">
          <span>Amar UI Web</span>
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
              <a
                href="https://github.com/dkk94/amar-ui-web"
                rel="noreferrer noopener"
                target="_blank">
                <FaIcon icon={['fab', 'github']} size="lg" className="MarginRight-small" />
                <FaIcon icon={'external-link-alt'} size="sm" />
              </a>
            </NavbarItem>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
