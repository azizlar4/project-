import React from 'react'
import "../cart.css"
import CartItem from '../Components/CartItem'

const Cart = () => {
  
  return (
    
    <div>
    {/*---- Include the above in your HEAD tag --------*/}
    <div className="card">
      <div className="card-header bg-dark text-light">
        <a href="/" className="btn btn-outline-info btn-sm pull-right">Continue shopping</a>
      </div>
      <div className="card-body">
        <CartItem/>
      </div>
      <div className="card-footer">
        <a href="www.google.com" className="btn btn-success pull-right">Pay</a>
        <div className="pull-right" style={{margin: '5px'}}>
          Total: <b>50.00€</b>
        </div>
      </div>
    </div>
  </div>     
     
  )
}

export default Cart