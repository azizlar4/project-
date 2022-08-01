import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, logout } from "../JS/Action/user";
import cart from "./icons/cart.svg";

const NavBar = () => {
  const isAdmin = useSelector((state) => state.userReducer.isAdmin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (localStorage.getItem("token")) {
      navigate("/cart");
    } else {
      window.location.reload();
    }
  };

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
            
            <Link to="/">
              <Button
                variant="link"
                style={{ color: "black", textDecoration: "none" }}
              >
                {isAdmin?"Products":"Home"}
              </Button>
            </Link>
            {isAuth ? (
              <Link to="/">
                <Button
                  style={{ color: "black", textDecoration: "none" }}
                  variant="link"
                  onClick={() => dispatch(logout(user._id))}
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  {" "}
                  <Button
                    style={{ color: "black", textDecoration: "none" }}
                    variant="link"
                    onClick={dispatch(clearErrors())}
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    style={{ color: "black", textDecoration: "none" }}
                    variant="link"
                    onClick={dispatch(clearErrors())}
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
            {isAdmin ? (
              <Link to="/dashboard/users">
                <Button
                  style={{ color: "black", textDecoration: "none" }}
                  variant="link"
                >
                  DashBoard
                </Button>
              </Link>
            ) : null}
            {isAuth && !isAdmin ? (
              <>
                
                <Link to="/profile">
                  <Button
                    variant="link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Profile
                  </Button>
                </Link>
                <img onClick={handleCartClick} src={cart} alt="" width="30" />
              </>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
