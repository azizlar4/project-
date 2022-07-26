import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../JS/Action/cart';

const CartItem = ({cart_item}) => {

  const dispatch = useDispatch();
  const user=useSelector(state=>state.userReducer.user);

  const handleDelteProduct =()=>{
    dispatch(deleteCartItem(user._id,cart_item._id));}
  return (
    <div className="row">
    <div className="col-xs-2 col-md-2">
      <img className="img-responsive" src={cart_item.image_url} alt="prewiew" />
    </div>
    <div className="col-xs-4 col-md-6">
      <h4 className="product-name"><strong>{cart_item.name}</strong></h4><h4><small>{cart_item.description}</small></h4>
    </div>
    <div className="col-xs-6 col-md-4 row">
      <div className="col-xs-6 col-md-6 text-right" style={{paddingTop: '5px'}}>
        <h6><strong>{cart_item.price} € <span className="text-muted">x</span></strong></h6>
      </div>
      <div className="col-xs-4 col-md-4">
        <p>{cart_item.quantity_added}</p>
      </div>
      <div className="col-xs-2 col-md-2">
        <button type="button" className="btn btn-outline-danger btn-xs" onClick={handleDelteProduct}>
          remove
        </button>
      </div>
    </div>
    <hr />
  </div>
  )
}

export default CartItem