import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../cart.css";
import CartItem from "../Components/CartItem";

import { Button, Spinner } from "react-bootstrap";
import { current_cart, emptyCart } from "../JS/Action/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const loading = useSelector((state) => state.cartReducer.loadCart);
  const user = useSelector((state) => state.userReducer.user);
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch();

//cart total
  let tot=0;
  for (let i=0;i<cartItems.length;i++){
    tot+=cartItems[i].price*cartItems[i].quantity_added
    }

  useEffect(() => {

     setTotal(tot);
    dispatch(current_cart())
    
  }, [dispatch,tot]);

  const HandleEmptyCart=()=>{
dispatch(emptyCart(user._id))
  }

  return (
 
    
      <div className="card">
        
        <div className="card-header bg-dark text-light">
          <a href="/" className="btn btn-outline-info btn-sm pull-right">
            Continue shopping
          </a>
          <Button variant="outline-danger" onClick={HandleEmptyCart}  style={{marginLeft:"15px"}} className="btn btn-outline-info btn-sm pull-right" >
            Empty Cart
          </Button>
        </div>
        <div className="card-body">
      {loading?(<Spinner animation="border" variant="secondary" />):( cartItems.reverse()
            .map((el) => <CartItem cart_item={el} key={el.id} />))}
        </div>
        <div className="card-footer">
          <a href="/payment" className="btn btn-success pull-right">
            Pay
          </a>
          <div className="pull-right" style={{ margin: "5px" }}>
            Total: <b>{total} €</b>
          </div>
        </div>
      </div>
   
  );
};

export default Cart;
