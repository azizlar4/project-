import React, { useEffect, useState } from 'react'
import './payment.css'
import credit_card from '../../Components/icons/credit_card.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addPayment, clearErrors } from '../../JS/Action/payment';
import Notification from '../../Components/Notification';
import { Spinner } from 'react-bootstrap';
import { emptyCart } from '../../JS/Action/cart';
import { AddedQuantityProduct_null, editAddedQuantityProduct } from '../../JS/Action/product';


const Payment = () => {


  const [newPayment, setnewPayment] = useState({});
  const user = useSelector((state) => state.userReducer.user);
  const cart = useSelector((state) => state.cartReducer.cartItems);
  const payment = useSelector((state) => state.paymentReducer.payment);
  const errors = useSelector((state) => state.paymentReducer.errors);
  const loading = useSelector((state) => state.paymentReducer.load);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { total } = useParams();

  const handleChange=(e)=>{
    setnewPayment({...newPayment,[e.target.name]:e.target.value})
}
const handlePay=(e)=>{
  e.preventDefault()
  dispatch(addPayment({...newPayment,total:total}))

 
}
useEffect(() => {

  if(payment){
    
    alert("payment succ...")

    navigate("/")
    dispatch(clearErrors())
    dispatch(emptyCart(user._id))
    //update products quantity 
    for ( let i in cart){
      let a=cart[i].quantity-cart[i].quantity_added
      dispatch(editAddedQuantityProduct(cart[i]._id,{quantity: `${a}`}))
     

    }
    dispatch(AddedQuantityProduct_null())

}

  
}, [dispatch,navigate,payment,user,cart])


  return (
      <div className="container py-5">
           {errors && errors.map(el=><Notification error={el}/>)}
           {console.log(errors)}
        {loading && <Spinner animation="border" variant="secondary" />}
        {/* For demo purpose */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-6"> Payment</h1>
          </div>
        </div> {/* End */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card ">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  {/* Credit card form tabs */}
                  <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                    <li className="nav-item"> <p className="nav-link active "> <i className="bi bi-credit-card-2-front" /> Credit Card </p> </li>
                    
                    
                  </ul>
                </div> {/* End */}
                {/* Credit card form content */}
                <div className="tab-content">
                  {/* credit card info*/}
                  <div id="credit-card" className="tab-pane fade show active pt-3">
                    <form  >
                      <div className="form-group"> <label htmlFor="username">
                          <h6>Card Owner</h6>
                        </label> <input name="cardOwner" onChange={handleChange} type="text"  placeholder="Card Owner Name" required className="form-control " /> </div>
                      <div className="form-group"> <label htmlFor="cardNumber">
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group"> <input  onChange={handleChange} type="text" name="cardNumber" placeholder="Valid card number" className="form-control " required />
                          <div className="input-group-append"> <span className="input-group-text text-muted"> <img src={credit_card} alt="credit card icon"  height={30} /> <i className="fab fa-cc-mastercard mx-1" /> <i className="fab fa-cc-amex mx-1" /> </span> </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group"> <label><span className="hidden-xs">
                                <h6>Expiration Date</h6>
                              </span></label>
                            <div className="input-group"> <input name="dateExpr"  onChange={handleChange} type="text" placeholder="MMYY" pattern="\d*" maxLength="4"  className="form-control" required /> </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                              <h6>CVV <i className="fa fa-question-circle d-inline" /></h6>
                            </label> <input name="cvv" onChange={handleChange}  type="text" required className="form-control" pattern="\d*" maxLength="4"></input> </div>
                        </div>
                    
                        
                        <div className="form-group"> <label htmlFor="username">
                          <h6>Shipping Adress</h6>
                        </label> <input type="text" name="address" onChange={handleChange} placeholder="Address" required className="form-control " /> </div>
                      </div>
                          <div  style={{display:"flex" ,justifyContent:"space-around" ,marginBottom:"15px",marginTop:"15px"}}>
                          <div className="form-group"> <label htmlFor="username">
                          <h6>City</h6>
                        </label> <input name="city" onChange={handleChange} type="text"  placeholder="City" required className="form-control " /> 
                        </div>
                        <div className="form-group"> <label htmlFor="username">
                          <h6>Postal Code</h6>
                        </label> <input name="postalCode" onChange={handleChange} type="text"  placeholder="Postal Code" required className="form-control " /> 
                        </div>
                        </div>
                        
                      <div className="card-footer"> <button type="button" onClick={handlePay} className="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button>
                      </div></form>
                  </div> {/* End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Payment