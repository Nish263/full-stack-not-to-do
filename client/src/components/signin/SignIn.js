import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn } from "../helper/axiosHelper";

export const SignIn = () => {
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnSubmit = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter email and passsword");
    }
    const { data } = await postSignIn({ email, password });
    // console.log(data);

    if (data.status === "success") {
      const { name, email, _id } = data.user;
      sessionStorage.setItem("userList", JSON.stringify({ name, email, _id }));
      // setError("");
      navigate("/dashboard");
      return;
    }
    // setError(data.message);
  };
  return (
    <div>
      <div className="login-comp">
        <Form>
          <h1 className="text-center">Sign In Here</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="warning" onClick={handleOnSubmit}>
            Sign in
          </Button>
          <div className="text-end">
            Not a member ? <Link to="/register">Sign Up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
