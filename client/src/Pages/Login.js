import React, { useEffect, useState } from "react";
import LockOutlinedIcons from "@mui/icons-material/LockOutlined";
import { Avatar, Grid, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {  Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Action/user";

const Login = () => {


  const [User, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  

  const userLogin = useSelector((state) => state.userReducer);
  const {errors,user,loadUser}=userLogin;


  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(User));
    navigate(-1);
  };
  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "40px"
    ,marginBottom:'190px' }}>
      <form>
        <h3>Sign In</h3>
        
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", margin: "auto" }}
          style={{ marginTop: "20px", marginBottom: "15px" }}
        >
          <LockOutlinedIcons />
        </Avatar>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChnage}
        />

        <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleChnage}
        />
        <Button
          style={{ marginTop: "10px" }}
          variant="primary"
          type="submit"
          onClick={handleUser}
        >
          login
        </Button>
        <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
      </form>
    </div>
  );
};

export default Login;
