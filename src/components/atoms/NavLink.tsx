import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLinkProps } from '../../interfaces/atoms/NavLink.interfaces';
import { StyledNavLink } from '../../styles/atoms/NavLink.styles';

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <StyledNavLink>
      <RouterNavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{children}</RouterNavLink>
    </StyledNavLink>
  );
};

export default NavLink;