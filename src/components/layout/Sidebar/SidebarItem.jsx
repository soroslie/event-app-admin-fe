import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SidebarItem({ path, title }) {
  const { pathname } = useLocation();

  return (
    <li className="rounded-lg mb-4">
      <NavLink
        to={path}
        className={`${pathname === path ? 'sidebar-link-active' : ''} flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
