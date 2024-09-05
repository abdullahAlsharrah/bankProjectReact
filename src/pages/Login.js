import React, { useContext, useState } from "react";
import money from "../assets/images/money.png";
import { Container, Form, Button } from "react-bootstrap";
import { mainColor } from "../utilities/constants";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import UserContext from "../utilities/context/userContext";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const userContext = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      userContext[1](true);
    },
  });

  const handleFormSubmit = (e) => {
    mutate();
    e.preventDefault();
  };

  return (
    <div
      className="d-flex align-items-center justify-content-around"
      style={{ height: "90vh" }}>
      <img className="pe-5" src={money} alt="money" style={{ width: "45%" }} />
      <Container
        fluid
        style={{ paddingLeft: 150 }}
        className=" d-flex flex-column align-items-center ">
        <h4 className="fw-bold" style={{ color: mainColor }}>
          Log in to your account
        </h4>
        <p>
          If you dont have an account, <Link to="/register">register now</Link>
        </p>
        <Container fluid>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              variant="outline-light"
              style={{ color: "#000" }}>
              Login
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
