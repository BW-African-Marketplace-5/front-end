import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Wrapper, Form_S, FormGroup_S} from './Login_Register_Styles';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login_Register = () => {
    return(
        <>
        <Navbar/>
        <Wrapper>
            <h1>Login or Register</h1>
            <Form_S>
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