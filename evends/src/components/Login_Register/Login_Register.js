import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Wrapper, Form_S, FormGroup_S, Logo, Title} from './Login_Register_Styles';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login_Register = () => {

const [Login, setLogin] = useState(true);

const Register = () =>{
    setLogin(false)
}
const Login_set = () =>{
    setLogin(true)
}
if (Login === true){
    return(
        <>
        <Navbar/>
        <Wrapper>
            <Logo src='/evends.png'></Logo>
            <Form_S>
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
                    <Button onClick={Login_set}>Login</Button>
                    <span style={{margin:'0px 5px'}}>or</span>
                    <Button onClick={Register}>Register</Button>
                </FormGroup_S>
           
       </Form_S>
        </Wrapper>
       </>
    );
} else{
    return(
        <>
        <Navbar/>
        <Wrapper>
            <Logo src='/evends.png'></Logo>
            <Form_S>
            <Title>Register For Evends</Title>
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
                    <Button onClick={Login_set}>Login</Button>
                    <span style={{margin:'0px 5px'}}>or</span>
                    <Button onClick={Register}>Register</Button>
                </FormGroup_S>
           
       </Form_S>
        </Wrapper>
       </>
    );
}
}

export default Login_Register;