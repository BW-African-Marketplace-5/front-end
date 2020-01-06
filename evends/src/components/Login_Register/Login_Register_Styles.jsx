import {FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
    background:#ffffffb5;
    padding: 10%;
`
export const TopBar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    background-color: #e33734;
    border-top: solid 2px #ffffff47;
    border-right: solid 2px #ffffff47;
    border-bottom: solid 2px #ffffff47;
`
export const Links = styled(Link)`
    padding: 5%;
    width:50%;
    border-left: solid 2px #ffffff47;
    font-weight: bold;
`
export const FormWrapper = styled.div`
    width:30%
    padding: 5% 0;

`
export const FormGroupS = styled(FormGroup)`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Wrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Logo = styled.img`
    width:200px;
`
export const Title = styled.h1`
    color:#e33734;
    font-weight:bold;
    font-size: 2rem;
    padding-bottom: 5%;
`