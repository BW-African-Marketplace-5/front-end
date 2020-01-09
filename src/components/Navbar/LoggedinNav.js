import React, { useState } from 'react';
import Typed from 'react-typed'
import {MdAccountCircle} from 'react-icons/md'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
    Logo,
    LinkWrapper,
    MenuLink ,
    RightText,
    UserMenu,
    LogOut
} from "./Navbar_Styles";
import logo from "../../imgs/evends.png";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let user = props.user;
  console.log('Navigation User:', props.user)
  //Typed JS Configuration
  var options = {
        strings: [`WELCOME ${user}`],
        typeSpeed: 80,
        backSpeed: 80
  };

  return (
    <div>
      <Navbar fixed='top'color="light" light expand="md">
        <NavbarBrand href="/"><Logo src={logo}></Logo></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkWrapper>
              <MenuLink href="/home">HOME</MenuLink>
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="/item-list">MARKET</MenuLink>
            </LinkWrapper>
            <LinkWrapper>
              <MenuLink href="/item-form">POST ITEMS</MenuLink>
            </LinkWrapper>
          </Nav>
          <RightText>
        
            {(props.user) ? 
            <Typed style={{marginRight:'10px', textTransform:'uppercase'}} strings={options.strings} typeSpeed={options.typeSpeed} backSpeed={options.backSpeed}/>
            : 'LOADING...'}
            
            </RightText>
          <Nav>
            <UserMenu nav inNavbar>
              <DropdownToggle nav caret>
                <MdAccountCircle/> ACCOUNT
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Post Items
                </DropdownItem>
                <DropdownItem>
                  My Posts
                </DropdownItem>
                <DropdownItem divider />
                <LogOut onClick={() => window.localStorage.clear("token")} href="/">
                  Log Out
                </LogOut>
              </DropdownMenu>
            </UserMenu>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;