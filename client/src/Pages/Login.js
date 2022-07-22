import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Action/user";
import Notification from "../Components/Notification";


const Login = () => {
  const [User, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(User));
    
    navigate("/");
  
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
        marginTop: "40px",
        marginBottom: "190px",
      }}
    >
     
  {errors && alert("errors")}

      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChnage} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={handleChnage} />

        <Button variant="primary" type="submit" onClick={handleUser}>
          login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
