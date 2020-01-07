import React, { useState } from "react";
import { Button, Input, Alert} from "reactstrap";
import {
  Wrapper,
  FormWrapper,
  Links,
  TopBar,
  Form,
  InputWrapper,
  Logo,
  Title,
  Submit
} from "./Login_Register_Styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../imgs/evends.png";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Login_Register = () => {
  const [Login, setLogin] = useState("Login"); //Login/Register Form State
  const [formValue, setForm] = useState({ username: "", password: "" }); //Form Value State
  const [visibleAlert, setVisibleAlert] = useState(false); //Alert State
  const [visibleWarning, setWarning] = useState(false); //Alert State
  const [error, setError] = useState('');
  const onDismiss = () => {
      setVisibleAlert(false);
      setWarning(false);
  }
  //Set Login State to 'Register' : Toggles Register Form
  const Register = () => {
    setLogin("Register");
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: "", password: "" });
  };
  //Set Login State to 'Login' : Toggles Login Form
  const Login_set = () => {
    setLogin("Login");
    setVisibleAlert(false);
    setWarning(false);
    setForm({ username: "", password: "" });
  };
//   const Login_Alert = () => {
//     if (visibleAlert === false){
//         setTimeout(() => { alert("Hello"); }, 3000);
//     }
//     setVisibleAlert(true);
//   }
  //Handles Login Form Submission
  const HandleLogin = (e, props) => {
    e.preventDefault();
    console.log(props);
    const values = { //Creates User Object for API Post
      username: formValue.username, //Assigned from formValue State
      password: formValue.password  //Assigned from formValue State
    };
    console.log("logging in...", values);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/login", values) //Passes User Object to API
      .then(response => {
        alert(response.data.message); //Alerts User of Login
        localStorage.setItem("token", response.data.token);
        // console.log(localStorage);
        props.history.push("/item-list");
      })
      .catch(error => {
        console.log('There was an error:', error.message);
        setWarning(true); //displays warning
        setError(error.message)
      })
      .finally(() => {
        setForm({ username: "", password: "" }); //Clears Form
      });
  };
  const HandleRegister = (e, props) => {
    e.preventDefault();
    const values = { //Creates User Object for API Post
      username: formValue.username,  //Assigned from formValue State
      password: formValue.password  //Assigned from formValue State
    };
    console.log("registering...", values);
    axiosWithAuth() 
      .post("https://evendsapi.herokuapp.com/api/register", values) //Passes User Object to API
      .then(response => {
        console.log('successfully registered:',response);
        setLogin("Login"); //Sets Form State to Login
        setVisibleAlert(true); //Makes Login Alert Visible
        // alert("Please sign in."); //Prompts User To Login
        props.history.push("/");
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

  const handleChanges = e => { //Change Handler for login/register forms
    // console.log("the name", e.target.name);
    // console.log("the event target", e.target);
    setForm({ //sets formState to the value of the form
      ...formValue,
      [e.target.name]: e.target.value
    });
  };
  if (Login === "Login") { //Checks Login/Register Form State
    return ( //Returns Login Form
      <>
        <Navbar />
        <Wrapper>
          <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar>
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
              <InputWrapper>
                <Submit>{Login}</Submit>
              </InputWrapper>
            </Form>
          </FormWrapper>
        </Wrapper>
        <Footer />
      </>
    );
  } else { //Returns Register Form
    return (
      <>
        <Navbar />
        <Wrapper>
          <FormWrapper>
            <Logo src={logo}></Logo>
            <TopBar>
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
              {/* <InputWrapper>
                    <Input 
                        type="password" 
                        name="validate_password" 
                        id="validate_password" 
                        placeholder="Confirm Password" 
                    />
                </InputWrapper> */}
                 <Alert color="danger" isOpen={visibleWarning} toggle={onDismiss}>
                 {error}
            </Alert>   
              <InputWrapper>
                <Submit type="submit">{Login}</Submit>
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
