import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Wrapper, Form_S, FormGroup_S, Logo, Title} from './Login_Register_Styles';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login_Register = () => {
    return(
        <>
        <Navbar/>
        <Wrapper>
            <Logo src='/evends.png'></Logo>
            <Form_S>
            <Title>Welcome To Evends</Title>
                <FormGroup_S>
                    <Input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='Enter Username'
                    />
                </FormGroup_S>
                <FormGroup_S>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter Password" 
                    />
                </FormGroup_S>
                <FormGroup_S>
                    <Button>Login</Button>
                    <p>or</p>
                    <Link>Register</Link>
                </FormGroup_S>
           
       </Form_S>
        </Wrapper>
       </>
    );
}

export default Login_Register;