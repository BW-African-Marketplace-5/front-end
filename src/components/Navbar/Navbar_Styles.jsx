import {Nav, NavLink, NavItem} from 'reactstrap';
import styled from 'styled-components';

export const Navigation = styled(Nav)`
    background-color:white;
    padding: 1% 0%;
    display:flex;
    justify-content:center;
  
`
export const Logo = styled.img`
    width:125px;
`
export const NavWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    width:75%;
`
export const LinkWrapper = styled(NavItem)`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const MenuLink = styled(NavLink)`
    color:#dc3545;
    :hover {
		color:#dc3545;
		cursor: pointer;
	}
`