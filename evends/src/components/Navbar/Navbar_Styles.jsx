import React from "react";
import {Nav, NavLink} from 'reactstrap';
import styled from 'styled-components';

export const Navigation = styled(Nav)`
    background-color:white;
    padding: 1% 0%;
    display:flex;
    justify-content:center;
`
export const Logo = styled.img`
    width:100px;
`
export const NavWrapper = styled.div`
    display:flex;
    justify-content:start;
`
export const MenuLink = styled(NavLink)`
    color:#dc3545;
    :hover {
		color:#dc3545;
		cursor: pointer;
	}
`