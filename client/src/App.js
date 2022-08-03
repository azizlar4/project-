import React ,{ useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

import { current_cart } from "./JS/Action/cart";
import { current_user, getUsers } from "./JS/Action/user";
import OrdersControl from "./Pages/AdminDashboard/Orders/OrdersControl";

import Users from "./Pages/AdminDashboard/Users List/Users";

import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment/Payment";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Orders from "./Pages/Profile/Orders";

import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAdmin = useSelector((state) => state.userReducer.isAdmin);

  useEffect(() => {
 if(localStorage.getItem('token')){

  dispatch(current_user())
  dispatch(current_cart())


  
 } 

  }, [dispatch])

  
  
  return (
    <div className="App">
      

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
         {/* Protected Routes */}
         {isAuth && (<><Route path="/cart" element={<Cart />} />
         <Route path="/cart/:id" element={<Cart />} />
         <Route path ="/payment/:total" element={<Payment/>}/>
         <Route path ="/profile" element={<Profile/>}/>
         <Route path ="/orders" element={<Orders/>}/>
         </> )}
         {isAdmin && (<> <Route path="/dashboard/users" element={<Users />} />
         <Route path="/dashboard/orders" element={<OrdersControl/>}/></>)}
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
