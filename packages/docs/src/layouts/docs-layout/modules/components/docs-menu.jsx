import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import './docs-menu.scss';

const routes = [
  {
    title: 'Getting Started',
    path: '/getting-started',
  },
  {
    title: 'Foundations',
    path: '/foundations',
    children: [
      {
        title: 'Color System',
        path: '/color-system',
      },
    ],
  },
  {
    title: 'Components',
    path: '/components',
    children: [
      {
        title: 'Card',
        path: '/card',
      },
      {
        title: 'Button',
        path: '/button',
      },
    ],
  },
];

const DocsMenu = () => {
  const renderNavItem = () => {
    return routes.map(route => {
      return <li className="DocsMenu"></li>;
    });
  };

  return (
    <div className="DocsMenu">
      <div className="DocsMenu-header"></div>

      <ul className="DocsMenu-nav">
        <li className="DocsMenu-navItem">
          <Link to="/getting-started">Getting Started</Link>
        </li>

        <li className="DocsMenu-navItem is-active">
          <Link to="#">Foundations</Link>

          <ul className="DocsMenu-nav">
            <li className="DocsMenu-navItem is-active">
              <Link to="/foundations/color-system">Color System</Link>
            </li>
            <li className="DocsMenu-navItem">
              <Link to="#">Spacing</Link>
            </li>
          </ul>
        </li>

        <li className="DocsMenu-navItem">
          <Link to="#">Layouts</Link>
        </li>

        <li className="DocsMenu-navItem">
          <Link to="#">Components</Link>

          <ul className="DocsMenu-nav">
            <li className="DocsMenu-navItem">
              <Link to="/components/button">Button</Link>
            </li>
            <li className="DocsMenu-navItem">
              <Link to="/components/card">Card</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DocsMenu;
