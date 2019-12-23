import React from "react";
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Navigation} from './Navbar_Styles';
const Navbar = () => {
    return(
        <Navigation>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Register</NavLink>
        </NavItem>
        </Navigation>
    );
}

export default Navbar;