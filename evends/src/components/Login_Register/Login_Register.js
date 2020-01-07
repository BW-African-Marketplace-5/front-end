import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import {
  Wrapper,
  FormWrapper,
  Links,
  TopBar,
  Form,
  InputWrapper,
  Logo,
  Title
} from "./Login_Register_Styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../imgs/evends.png";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Login_Register = props => {
  const [Login, setLogin] = useState("Login"); //Login/Register Form State
  const [formValue, setForm] = useState({ username: "", password: "" }); //Form Value State

  //Set Login State to 'Register' : Toggles Register Form
  const Register = () => {
    setLogin("Register");
  };
  //Set Login State to 'Login' : Toggles Login Form
  const Login_set = () => {
    setLogin("Login");
  };

  const HandleLogin = e => {
    e.preventDefault();
    console.log(props);
    const values = {
      //Creates User Object for API Post
      username: formValue.username, //Assigned from formValue State
      password: formValue.password //Assigned from formValue State
    };
    console.log("logging in...", values);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/login", values) //Passes User Object to API
      .then(response => {
        alert(response.data.message); //Alerts User of Login
        localStorage.setItem("token", response.data.token);
        props.history.push("/item-list");
      })
      .catch(error => {
        alert(error.message); //Alerts Error
      })
      .finally(() => {
        setForm({ username: "", password: "" }); //Clears Form
      });
  };
  const HandleRegister = e => {
    console.log(props, e);
    e.preventDefault();
    const values = {
      //Creates User Object for API Post
      username: formValue.username, //Assigned from formValue State
      password: formValue.password //Assigned from formValue State
    };
    console.log("registering...", values);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/register", values) //Passes User Object to API
      .then(response => {
        console.log(response);
        alert("Please sign in."); //Prompts User To Login
        Login_set();
      })
      .catch(error => {
        alert(error.message); //Alerts Error
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
  if (Login === "Login") {
    //Checks Login/Register Form State
    return (
      //Returns Login Form
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
              <InputWrapper>
                <Button>{Login}</Button>
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
              <InputWrapper>
                <Button type="submit">{Login}</Button>
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
