import React from "react";
import { NavItem} from 'reactstrap';
import {Navigation, Logo, MenuLink} from './Navbar_Styles';
import logo from '../../imgs/evends.png'
const Navbar = () => {
    return(
  
        <Navigation>
          <Logo src={logo}></Logo> 
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