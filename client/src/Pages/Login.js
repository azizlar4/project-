import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Action/user";



const Login = () => {
  const [User, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const loading = useSelector((state) => state.userReducer.loadUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(User))
    navigate('/register')
  
  };
  return (
    <div
    
    >
      {errors && errors.map(el=><Alert variant="danger">{el.msg}</Alert>)}
     {console.log(loading)}
     {console.log(errors)}

    {loading && <Spinner animation="border" variant="secondary" />}

     <Form >
     
      
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChnage} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={handleChnage} />

        <Button variant="primary" type="submit" disabled={loading} onClick={handleUser} >
          login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
