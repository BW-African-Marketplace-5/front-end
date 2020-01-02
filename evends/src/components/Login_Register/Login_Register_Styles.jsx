import React from "react";
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.div`
    background:#ffffffb5;
    padding: 15%;
`
export const TopBar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    background-color: #e33734;
    border: solid 2px #ffffff47;
`
export const Links = styled(Link)`
    padding: 5%;
    width:50%;
`
export const FormWrapper = styled.div`
    width:30%
    margin: 10% 0;

`
export const FormGroup_S = styled(FormGroup)`
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
    width:300px;
`
export const Title = styled.h1`
    color:white;
    font-weight:bold;
    font-size: 1.5rem;
`