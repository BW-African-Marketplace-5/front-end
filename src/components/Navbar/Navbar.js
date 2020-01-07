import React from "react";
<<<<<<< HEAD
import {Navigation, Logo, MenuLink, LinkWrapper} from './Navbar_Styles';
import logo from '../../imgs/evends.png'
const Navbar = () => {
    return(
  
        <Navigation>
          <Logo src={logo}></Logo> 
        <LinkWrapper>
          <MenuLink href="/">Home</MenuLink>
        </LinkWrapper>
        <LinkWrapper>
          <MenuLink href="/item-form">Login/Register</MenuLink>
        </LinkWrapper>
        <LinkWrapper>
          <MenuLink href="/item-list">Inventory</MenuLink>
        </LinkWrapper>
        </Navigation>
    );
}
=======
import { NavItem } from "reactstrap";
import { Navigation, Logo, MenuLink } from "./Navbar_Styles";
import logo from "../../imgs/evends.png";
const Navbar = () => {
  return (
    <Navigation>
      <Logo src={logo}></Logo>
      <NavItem>
        <MenuLink href="/">Home</MenuLink>
      </NavItem>
      <NavItem>
        <MenuLink href="/item-form">Add Item</MenuLink>
      </NavItem>
      <NavItem>
        <MenuLink href="/item-list">Items</MenuLink>
      </NavItem>
    </Navigation>
  );
};
>>>>>>> 285cf1ea65f6ef5342b4c2cc87ad9b20c2ee29ac

export default Navbar;
