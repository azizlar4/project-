import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../JS/Action/user";
import LockOutlinedIcons from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";

const Register = () => {

const [newUser, setnewUser] = useState({});
const dispatch=useDispatch();
const navigate=useNavigate()
const handleChnage=(e)=>{
    setnewUser({...newUser,[e.target.name]:e.target.value})
}
const handleUser=(e)=>{
    e.preventDefault()
    dispatch(register(newUser))
    navigate('/login')
}
  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "40px" }}>
          <h3>Sign In</h3>
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", margin: "auto" }}
          style={{ marginTop: "20px", marginBottom: "15px" }}
        >
          <LockOutlinedIcons />
        </Avatar>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChnage} />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="last_name" onChange={handleChnage} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChnage}/>

        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChnage} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={handleChnage}/>

        <Button style={{marginTop:"10px"}} variant="primary" type="submit" onClick={handleUser}>
          register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
