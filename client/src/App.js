import React ,{ useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

import { current_cart } from "./JS/Action/cart";
import { current_user } from "./JS/Action/user";

import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment/Payment";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Register from "./Pages/Register";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
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
         <Route path ="/payment" element={<Payment/>}/></> )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
