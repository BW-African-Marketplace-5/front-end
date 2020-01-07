import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import {
  Wrapper,
  FormWrapper,
  Links,
  TopBar,
  Form,
  FormGroupS,
  Logo,
  Title
} from "./Login_Register_Styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../imgs/evends.png";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Login_Register = () => {
  const [Login, setLogin] = useState("Login");
  const [formValue, setForm] = useState({ username: "", password: "" });

  const Register = () => {
    setLogin("Register");
  };
  const Login_set = () => {
    setLogin("Login");
  };

  const HandleLogin = (e, props) => {
    e.preventDefault();
    console.log(props);
    const values = {
      username: formValue.username,
      password: formValue.password
    };
    console.log("logging in...", values);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/login", values)
      .then(response => {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        console.log(localStorage);
        props.history.push("/item-list");
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        setForm({ username: "", password: "" });
      });
  };
  const HandleRegister = (e, props) => {
    e.preventDefault();
    const values = {
      username: formValue.username,
      password: formValue.password
    };
    console.log("registering...", values);
    axiosWithAuth()
      .post("https://evendsapi.herokuapp.com/api/register", values)
      .then(response => {
        console.log(response);
        alert("Please sign in.");
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        setForm({ username: "", password: "" });
      });
  };

  const handleChanges = e => {
    // console.log("the name", e.target.name);
    // console.log("the event target", e.target);
    setForm({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };
  if (Login === "Login") {
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
            <Form onSubmit={HandleLogin}>
              <Title>Login</Title>
              <FormGroupS>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChanges}
                />
              </FormGroupS>
              <FormGroupS>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChanges}
                />
              </FormGroupS>
              <FormGroupS>
                <Button>{Login}</Button>
              </FormGroupS>
            </Form>
          </FormWrapper>
        </Wrapper>
        <Footer />
      </>
    );
  } else {
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
              <FormGroupS>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChanges}
                />
              </FormGroupS>
              <FormGroupS>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChanges}
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
                <Button type="submit">{Login}</Button>
              </FormGroupS>
            </Form>
          </FormWrapper>
        </Wrapper>
        <Footer />
      </>
    );
  }
};

export default Login_Register;
