import React from 'react';
import { NavItemProps } from '../../interfaces/atoms/NavItem.interfaces';
import { StyledNavItem } from '../../styles/atoms/NavItem.styles';

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <StyledNavItem>{children}</StyledNavItem>;
};

export default NavItem;