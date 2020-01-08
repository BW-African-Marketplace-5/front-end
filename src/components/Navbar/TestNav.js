import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
    Logo,
    LinkWrapper,
    MenuLink ,
    RightText
} from "./Navbar_Styles";
import logo from "../../imgs/evends.png";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //typed.js
  var options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40
  };

  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><Logo src={logo}></Logo></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkWrapper>
              <MenuLink href="/">HOME</MenuLink>
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="https://github.com/reactstrap/reactstrap">ABOUT</MenuLink>
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="https://github.com/reactstrap/reactstrap">OUR MISSION</MenuLink>
            </LinkWrapper>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        <RightText>AFRICAN MARKETPLACE</RightText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;