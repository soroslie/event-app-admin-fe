import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SidebarItem({ path, title }) {
  const { pathname } = useLocation();

  return (
    <li className="rounded-lg mb-4">
      <NavLink
        to={path}
        className={`${pathname === path ? 'sidebar-link-active' : ''} uppercase flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 hover:scale-105 hover:text-orange-500`}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
