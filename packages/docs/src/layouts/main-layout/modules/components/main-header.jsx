import React from 'react';
import { Link } from 'gatsby';
import './main-header.scss';

const MainHeader = () => {
  return (
    <div className="Main-header MainHeader">
      <div className="MainHeader-brand">
        <div className="FontSize-xlarge">Amar UI Web</div>
      </div>
      <div className="MainHeader-nav">
        <ul className="MainHeader-navList">
          <li className="MainHeader-navItem">
            <Link to="/getting-started">Documentation</Link>
          </li>
          <li className="MainHeader-navItem">
            <Link to="/getting-started">Documentation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
