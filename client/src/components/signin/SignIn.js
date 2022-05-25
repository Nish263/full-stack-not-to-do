import React from "react";
import { Form, Button } from "react-bootstrap";

export const SignIn = () => {
  return (
    <div>
      <div className="login-comp">
        <Form>
          <h1 className="text-center">Sign In Here</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="warning" type="submit">
            Sign in
          </Button>
          <div className="text-end">
            Not a member ? <a href="/register">Sign Up</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
