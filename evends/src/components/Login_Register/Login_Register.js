import React, {useState} from "react";
import { Button, Input} from 'reactstrap';
import {Wrapper, FormWrapper, Links, TopBar, Form, FormGroupS, Logo, Title} from './Login_Register_Styles';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import logo from '../../imgs/evends.png'
import axios from 'axios'

const Login_Register = () => {

const [Login, setLogin] = useState('Login');

const Register = () =>{
    setLogin('Register')
}
const Login_set = () =>{
    setLogin('Login')
}

const HandleRegister = (values, tools) => {
    axios.post('https://evendsapi.herokuapp.com/api/register', values)
    .then(response =>{
        console.log(response);
    })
    .catch(error =>{
        alert(error.message);
    })
    // alert('You Registered');
    
}

const HandleLogin = () => {

}
if (Login === 'Login'){
    return(
        <>
        <Navbar/>
        <Wrapper>
            <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar>
                <Links to ='/' onClick={Login_set}>Login</Links>
                <Links to ='/' onClick={Register}>Register</Links>
            </TopBar>
            <Form onSubmit={HandleLogin}>
            <Title>Login To Evends</Title>
               <FormGroupS>
                    <Input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='Enter Username'
                    />
                </FormGroupS>
                <FormGroupS>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter Password" 
                    />
                </FormGroupS>
                <FormGroupS>
                    <Button>{Login}</Button>
                </FormGroupS>
           
                </Form>
             </FormWrapper>
        </Wrapper>
    <Footer/>
       
       </>
    );
} else{
    return(
        <>
        <Navbar/>
        <Wrapper>
            <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar>
                <Links to ='/' onClick={Login_set}>Login</Links>
                <Links to ='/' onClick={Register}>Register</Links>
            </TopBar>
            <Form onSubmit={HandleRegister}>
            <Title>Register</Title>
                <FormGroupS>
                    <Input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='User Name'
                    />
                </FormGroupS>
                <FormGroupS>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                    />
                </FormGroupS>
                {/* <FormGroupS>
                    <Input 
                        type="password" 
                        name="validate_password" 
                        id="validate_password" 
                        placeholder="Confirm Password" 
                    />
                </FormGroupS> */}
                <FormGroupS>
                    <Button type='submit'>{Login}</Button>
                </FormGroupS>   
            </Form>
            
        </FormWrapper>
    </Wrapper>
<Footer/>
       </>
    );
}
}

export default Login_Register;