import React from "react";
import { Navigation, Logo, MenuLink, LinkWrapper, NavWrapper } from "./Navbar_Styles";
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
        <MenuLink href="/">About</MenuLink>
      </LinkWrapper>
      <LinkWrapper>
        <MenuLink href="/">Our Mission</MenuLink>
      </LinkWrapper>
      </NavWrapper>
    </Navigation>
  );
};

export default Navbar;
