import React from "react";
import { Navigation, Logo, MenuLink, LinkWrapper } from "./Navbar_Styles";
import logo from "../../imgs/evends.png";
const Navbar = () => {
  return (
    <Navigation>
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
    </Navigation>
  );
};

export default Navbar;
