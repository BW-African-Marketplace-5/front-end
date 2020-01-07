import React from "react";
import { NavItem} from 'reactstrap';
import {Navigation, Logo, MenuLink} from './Navbar_Styles';
import logo from '../../imgs/evends.png'
const Navbar = () => {
    return(
  
        <Navigation>
          <Logo src={logo}></Logo> 
        <NavItem>
          <MenuLink href="/">Home</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink href="#">Add Item</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink href="/item-list">Items</MenuLink>
        </NavItem>
        </Navigation>
    );
}

export default Navbar;