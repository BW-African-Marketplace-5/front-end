import React from "react";
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Navigation, Logo, MenuLink} from './Navbar_Styles';
const Navbar = () => {
    return(
  
        <Navigation>
          <Logo src='/evends.png'></Logo> 
        <NavItem>
          <MenuLink href="#">Home</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink href="#">Login</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink href="#">Register</MenuLink>
        </NavItem>
        </Navigation>
    );
}

export default Navbar;