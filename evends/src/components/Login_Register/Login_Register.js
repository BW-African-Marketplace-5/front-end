import React, {useState} from "react";
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Wrapper, FormWrapper, Links, TopBar, Form, FormGroup_S, Logo, Title} from './Login_Register_Styles';
import Navbar from '../Navbar/Navbar';

const Login_Register = () => {

const [Login, setLogin] = useState('Login');

const Register = () =>{
    setLogin('Register')
}
const Login_set = () =>{
    setLogin('Login')
}
if (Login === 'Login'){
    return(
        <>
        <Navbar/>
        <Wrapper>
            <FormWrapper>
            <Logo src='/evends.png'></Logo>
            <TopBar>
                <Links onClick={Login_set}>Login</Links>
                <Links onClick={Register}>Register</Links>
            </TopBar>
            <Form>
            <Title>Login To Evends</Title>
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
                    <Button>{Login}</Button>
                </FormGroup_S>
           
       </Form>
             </FormWrapper>
        </Wrapper>
       </>
    );
} else{
    return(
        <>
        <Navbar/>
        <Wrapper>
            <FormWrapper>
            <Logo src='/evends.png'></Logo>
            <TopBar>
                <Links onClick={Login_set}>Login</Links>
                <Links onClick={Register}>Register</Links>
            </TopBar>
            <Form>
            <Title>Register Now</Title>
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
                    <Button>{Login}</Button>
                </FormGroup_S>
           
       </Form>
             </FormWrapper>
        </Wrapper>
       </>
    );
}
}

export default Login_Register;