import React, { useState } from "react";
import { Alert, Input, Spinner} from "reactstrap";
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
import Navbar from "../Navbar/TestNav"; //Test NavBar 
import Footer from "../Footer/Footer";
import logo from "../../imgs/evends.png";
import axiosWithAuth from "../../utils/axiosWithAuth";



const Login_Register = props => {
  const [Login, setLogin] = useState(true); //Login/Register Form State
  const [formValue, setForm] = useState({ username: "", password: "", validate_password:"" }); //Form Value State
  const [visibleAlert, setVisibleAlert] = useState(false); //Alert State
  const [visibleWarning, setWarning] = useState(false); //Alert State
  const [error, setError] = useState(''); //Error State
  const [spinner, setSpin] = useState(false); //Spinner

  console.log('The Form Values Are:', formValue)
  const onDismiss = () => {
      setVisibleAlert(false);
      setWarning(false);
  }
  //Set Login State to 'Register' : Toggles Register Form
  const Register = () => {
    setLogin(false);
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: '', password: '', validate_password:'' });
  };
  //Set Login State to 'Login' : Toggles Login Form
  const Login_set = () => {
    setLogin(true);
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: '', password: '', validate_password:'' });
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
    console.log('Register Validation Props:', props.password.length);
    if(!props.username && props.password && props.validate_password){
      setError('Username Cannot Be Blank');
      return false;
    }
    if(!props.password && !props.validate_password && props.username){
      setError('Passwords Cannot Be Blank');
      return false;
    }
    if(!props.password){
      setError('Password Cannot Be Blank');
      return false
    }else if (props.password.length < 5){
      setError('Password Must Be At Least 5 Characters');
      return false
    }
    if(props.password === '' && props.username === '' && props.validate_password === ''){
      setError('Fields Cannot Be Blank')
      return false;
    }
    if(props.password !== props.validate_password){
      setError('Passwords Do Not Match')
      return false;
    }
    return true;
  }
  //Handles Login Form Submission
  const HandleLogin = (e) => {
    e.preventDefault(); //Prevents Default
    console.log('The Error State is:', error);
    const isValid = validateLogin(formValue); //return true or false 
    console.log("logging in...", formValue);
    if(isValid){
      setSpin(true);
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
        setSpin(false); //turns off loader
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
    if(isValid){
      const values = { //values to pass from state
        username: formValue.username,
        password: formValue.password
      }
      axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/register", values) //Passes form valueto API
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
    }else{
      setWarning(true);
    }
  };

  const handleChanges = e => {
    //Change Handler for login/register forms
    // console.log("the name", e.target.name);
    // console.log("the event target", e.target);
    onDismiss();
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
            <PassRecovery>Forgot <a className='passwordLink' href="/" >Password?</a></PassRecovery> 
              <InputWrapper>
              <Submit>Login</Submit>
              </InputWrapper>
              { spinner ? (<Spinner size="sm" color="secondary" />) : (<br></br>)}
              <Alert color="success" isOpen={visibleAlert} toggle={onDismiss}>
                    Success! — Please Login!
                </Alert>
            <Alert color="danger" isOpen={visibleWarning} toggle={onDismiss}>
                {error}
            </Alert>
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
                        value={formValue.checkPass}
                        onChange={handleChanges}
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
