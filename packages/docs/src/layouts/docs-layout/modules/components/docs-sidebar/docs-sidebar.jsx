import React from 'react';
import { DocsMenu } from '../docs-menu';
import { DOCS_MENU } from '../../constants/docs-menu.constant';
import './docs-sidebar.scss';

const DocsSidebar = () => {
  return (
    <div className="DocsSidebar Docs-sidebar">
      <div className="DocsSidebar-menuArea">
        <DocsMenu menuItems={DOCS_MENU} />
      </div>
    </div>
  );
};

export default DocsSidebar;
