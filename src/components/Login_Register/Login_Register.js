import React, { useState } from "react";
import { Alert, Input} from "reactstrap";
import {
  Wrapper,
  FormWrapper,
  Links,
  TopBar,
  Form,
  InputWrapper,
  Logo,
  Title,
  Submit,
  PassRecovery
} from "./Login_Register_Styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../imgs/evends.png";
import axiosWithAuth from "../../utils/axiosWithAuth";



const Login_Register = props => {
  const [Login, setLogin] = useState(true); //Login/Register Form State
  const [formValue, setForm] = useState({ username: "", password: "" }); //Form Value State
  const [visibleAlert, setVisibleAlert] = useState(false); //Alert State
  const [visibleWarning, setWarning] = useState(false); //Alert State
  const [error, setError] = useState(''); //Error State

  const onDismiss = () => {
      setVisibleAlert(false);
      setWarning(false);
  }
  //Set Login State to 'Register' : Toggles Register Form
  const Register = () => {
    setLogin(false);
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: "", password: "" });
  };
  //Set Login State to 'Login' : Toggles Login Form
  const Login_set = () => {
    setLogin(true);
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: "", password: "" });
  };
  
  //Validate Login Form
  const validateLogin = (props) => {
    console.log('Login Validation Props:', props);
    if(!props.username && props.password){
      setError('Username Cannot Be Blank');
      return false;
    }
    if(!props.password && props.username){
      setError('Password Cannot Be Blank');
      return false;
    }
    if(props.password === '' && props.username === ''){
      setError('Fields Cannot Be Blank');
      return false;
    }
    return true;
  }
  //Validate Register Form
  const validateRegister = (props) =>{
    console.log('Login Validation Props:', props);
  }
  //Handles Login Form Submission
  const HandleLogin = (e) => {
    e.preventDefault(); //Prevents Default
    console.log('The Error State is:', error);
    const isValid = validateLogin(formValue);
    console.log("logging in...", formValue);
    if(isValid){
      axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/login", formValue) //Passes form value to API
      .then(response => {
        alert(response.data.message); //Alerts User of Login
        localStorage.setItem("token", response.data.token);
        props.history.push("/item-list");
      })
      .catch(error => {
        console.log('There was an error:', error.message);
        setWarning(true); //displays warning
        setError('Wrong Username/Password')
      })
      .finally(() => {
        setForm({ username: "", password: "" }); //Clears Form
      });
    }else{
      setWarning(true); //displays warning
    }
  };
  const HandleRegister = e => {
    console.log(props, e);
    e.preventDefault();
    const isValid = validateRegister(formValue);
    console.log("registering...", formValue);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/register", formValue) //Passes form valueto API
      .then(response => {
        console.log('successfully registered:',response);
        setLogin(true); //Sets Form State to Login
        setVisibleAlert(true); //Makes Login Alert Visible
        // alert("Please sign in."); //Prompts User To Login
      })
      .catch(error => {
        console.log('There was an error:', error.message);
        setWarning(true); //displays warning
        setError(error.message)
      })
      .finally(() => {
        setForm({ username: "", password: "" });
      });
  };

  const handleChanges = e => {
    //Change Handler for login/register forms
    // console.log("the name", e.target.name);
    // console.log("the event target", e.target);
    setForm({
      //sets formState to the value of the form
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  if (Login) { //Checks Login/Register Form State
    return ( //Returns Login Form
      <>
        <Navbar />
        <Wrapper>
          <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar className='topBar'>
              <Links to="/" onClick={Login_set}>  
                Login
              </Links>
              <Links to="/" onClick={Register}>
                Register
              </Links>
            </TopBar>
            <Form onSubmit={HandleLogin}>
              <Title>Login</Title>
              <InputWrapper>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <Alert color="success" isOpen={visibleAlert} toggle={onDismiss}>
                    Success! — Please Login!
                </Alert>
            <Alert color="danger" isOpen={visibleWarning} toggle={onDismiss}>
                {error}
            </Alert>
            <PassRecovery>Forgot <a className='passwordLink' href="/" >Password?</a></PassRecovery> 
              <InputWrapper>
              <Submit>Login</Submit>
              </InputWrapper>
            </Form>
          </FormWrapper>
        </Wrapper>
        <Footer />
      </>
    );
  } else {
    //Returns Register Form
    return (
      <>
        <Navbar />
        <Wrapper>
          <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar className='topBar'>
              <Links to="/" onClick={Login_set}>
                Login
              </Links>
              <Links to="/" onClick={Register}>
                Register
              </Links>
            </TopBar>
            <Form method="post" onSubmit={HandleRegister}>
              <Title>Register</Title>
              <InputWrapper>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                    <Input 
                        type="password" 
                        name="validate_password" 
                        id="validate_password" 
                        placeholder="Confirm Password" 
                    />
                </InputWrapper>
                 <Alert color="danger" isOpen={visibleWarning} toggle={onDismiss}>
                 {error}
            </Alert>
            <PassRecovery>Forgot <a className='passwordLink' href="/" >Password?</a></PassRecovery>  
              <InputWrapper>
                <Submit type="submit">Register</Submit>
              </InputWrapper>
            </Form>
          </FormWrapper>
        </Wrapper>
        <Footer />
      </>
    );
  }
};

export default Login_Register;