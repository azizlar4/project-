import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { clearErrors, login } from "../JS/Action/user";
import LockOutlinedIcons from "@mui/icons-material/LockOutlined";
import { Avatar, Grid, Link } from "@mui/material";
import Notification from "../Components/Notification";



const Login = () => {
  
  const [User, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const loading = useSelector((state) => state.userReducer.loadUser);
  const user = useSelector((state) => state.userReducer.user);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(User))
    
  };
  
  useEffect(()=>{

    if(user){
      
        navigate("/")
        dispatch(clearErrors())
   }

    

},[navigate,user,errors,dispatch])

  return (

  

      <div style={{ width: "500px", margin: "auto", marginTop: "40px"
      ,marginBottom:'190px' }}>
        
        {errors && errors.map(el=><Notification error={el}/>)}
        {loading && <Spinner animation="border" variant="secondary" />}
     
        <Form > 
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
  
          <Form.Label style={{ marginTop: "10px" }} >Password</Form.Label>
          <Form.Control
     autoComplete="new-password"
            type="password"
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
        </Form>
      </div>
  );
};

export default Login;
