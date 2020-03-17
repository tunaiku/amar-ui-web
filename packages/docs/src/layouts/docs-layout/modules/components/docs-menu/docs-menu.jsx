import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Menu, MenuItem } from 'components/menu';

const DocsMenu = props => {
  const { menuItems } = props;
  const location = useLocation();

  const activateCurrentMenuItem = (path, location) => {
    const isCurrentRoute = path === location.pathname && 'is-active';
    return isCurrentRoute;
  };

  return (
    <Menu>
      {menuItems.map(menuItem => {
        const { path, title, submenu } = menuItem;

        return (
          <MenuItem>
            <Link to={path} activeClassName={activateCurrentMenuItem(path, location)}>
              {title}
            </Link>
            {submenu && <DocsMenu menuItems={submenu} />}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default DocsMenu;
