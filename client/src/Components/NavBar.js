import React from "react";
import {

  Button,
  Container,

  Nav,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/Action/user";
import cart from './icons/cart.svg'

const NavBar = () => {
  
  const isAdmin=useSelector(state=>state.userReducer.isAdmin);
  const isAuth=useSelector(state=>state.userReducer.isAuth);
  const navigate =useNavigate()

const handleCartClick=()=>{navigate('/cart')}

  const dispatch = useDispatch();


  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            
            <img
              alt=""
              src="https://imgur.com/ihum12s.png"
              width="70"
              height="100"
              className="d-inline-block align-top"
            />

            <h4 style={{ marginLeft: "15px", fontFamily: "-moz-initial" }}>
              Fine Watches
            </h4>
          </Navbar.Brand>
      
          <Nav className="ml-auto">
            <Link to="/"><Button  variant="link" style={{color:"black" , textDecoration: 'none'}}>Home</Button></Link>
            {isAuth?
             (<Link to="/"><Button style={{color:"black" , textDecoration: 'none'}} variant="link"  onClick={()=>dispatch(logout())}>Logout</Button></Link>):
             ( <><Link to="/register"> <Button style={{color:"black" , textDecoration: 'none'}} variant="link">Register</Button></Link>
             <Link to="/login"><Button  style={{color:"black" , textDecoration: 'none'}} variant="link">Login</Button></Link>
             
            </>)
            }
            {isAdmin?<Link to="/dashboard"><Button style={{color:"black" , textDecoration: 'none'}} variant="link">DashBoard</Button></Link>:null}
            {isAuth &&!isAdmin?<img onClick={handleCartClick} src={cart} alt="" width="30" />:null}
           
          
          </Nav>
        </Container>
     
        
      </Navbar>
     
         
     
    </div>
  );
};

export default NavBar;
