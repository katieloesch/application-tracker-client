import React from 'react';
import { NavLink } from 'react-router-dom';

import { useDashboardContext } from '../pages/DashboardLayout';
import { navLinks } from '../utils';

const NavLinks = () => {
  const { user, toggleSidebar } = useDashboardContext();

  return (
    <div className='nav-links'>
      {navLinks.map((link) => (
        <NavLink
          to={link.path}
          key={`nav-link-mobile-${link.label}`}
          className={`nav-link ${link.className}`}
          onClick={toggleSidebar}
          end
        >
          <span className='icon'>{link.icon}</span>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
