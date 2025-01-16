import React from 'react';

import NavItem from '../atoms/NavItem';
import NavLink from '../atoms/NavLink';
import OnOffButton from '../atoms/OnOffButton';

import { NavbarContainer } from '../../styles/organisms/Navbar.styles';

import { Routes } from '../../constants/routes';
import { useTheme } from '../../contexts/ThemeContext';


const Navbar: React.FC = () => {
  
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <NavbarContainer>
      <ul>
        <NavItem>
          <NavLink to={Routes.Home}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={Routes.Budget} >Budget</NavLink>
        </NavItem>
      </ul>
      <OnOffButton toggle={toggleTheme} isOn={isDarkTheme} />
    </NavbarContainer>
  );
};

export default Navbar;
