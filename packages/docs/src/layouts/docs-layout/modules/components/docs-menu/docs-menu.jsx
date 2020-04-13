import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Menu, MenuItem } from 'components/menu';
import { sortArrayObjectAlphabetically } from 'utilities/object.util';

const DocsMenu = props => {
  const { className, menuItems } = props;
  const location = useLocation();

  const activateCurrentMenuItem = (path, location) => {
    const isCurrentRouteActive = path === location.pathname && 'is-active';
    return isCurrentRouteActive;
  };

  return (
    <Menu>
      {menuItems.map(menuItem => {
        const { path, title, submenu } = menuItem;
        const hasSubmenu = submenu;

        if (hasSubmenu) {
          sortArrayObjectAlphabetically(submenu, 'title');
        }

        return (
          <MenuItem isCategory={hasSubmenu}>
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
