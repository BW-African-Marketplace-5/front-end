import React from "react";
import {
  Navigation,
  Logo,
  MenuLink,
  LinkWrapper,
  NavWrapper
} from "./Navbar_Styles";
import logo from "../../imgs/evends.png";
const Navbar = () => {
  return (
    <Navigation>
      <NavWrapper>
        <Logo src={logo}></Logo>
        <LinkWrapper>
          <MenuLink href="/">Home</MenuLink>
        </LinkWrapper>
        <LinkWrapper>
          <MenuLink href="/item-form">Post Product</MenuLink>
        </LinkWrapper>
        <LinkWrapper>
          <MenuLink href="/item-list">Inventory</MenuLink>
        </LinkWrapper>
        <LinkWrapper>
          <MenuLink onClick={() => window.localStorage.clear("token")} href="/">
            Log Out
          </MenuLink>
        </LinkWrapper>
      </NavWrapper>
    </Navigation>
  );
};

export default Navbar;
