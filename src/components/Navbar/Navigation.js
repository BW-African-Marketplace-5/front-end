import React, { useState } from "react";
import Typed from "react-typed";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from "reactstrap";
import { Logo, LinkWrapper, MenuLink, RightText } from "./Navbar_Styles";
import logo from "../../imgs/evends.png";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //Typed JS Configuration
  var options = {
    strings: ["<b>BUY</b>", "<b>SELL</b>", "<b>TRADE</b>", "<b>COMPARE</b>"],
    typeSpeed: 80,
    backSpeed: 80
  };

  //Active Link

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/">
          <Logo src={logo}></Logo>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkWrapper>
              {props.active ? (
                <MenuLink href="/" className="active">
                  HOME
                </MenuLink>
              ) : (
                <MenuLink href="/">HOME</MenuLink>
              )}
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="/">ABOUT</MenuLink>
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="/">OUR MISSION</MenuLink>
            </LinkWrapper>
          </Nav>
          <RightText>
            <Typed
              style={{ marginRight: "10px" }}
              strings={options.strings}
              typeSpeed={options.typeSpeed}
              backSpeed={options.backSpeed}
              loop
            />
            IN AFRICA'S{" "}
            <b>
              <i>NEWEST</i>
            </b>{" "}
            MARKETPLACE
          </RightText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
