import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postSignUp } from "../helper/axiosHelper";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const [frmData, setFrmData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };
  // console.log(frmData);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postSignUp(frmData);
    console.log(result);
  };
  return (
    <div>
      <div className="login-comp">
        <Form onSubmit={handleOnSubmit}>
          <h1 className="text-center">Sign Up Here !!!</h1>
          <hr />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleOnChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Sign Up
          </Button>
          <div className="text-end">
            Already a member ? <a href="/">Sign In</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
