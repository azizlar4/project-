
import axios from "axios";
import { CART_ADD_ITEM, CURRENT_CART, FAIL_CART, LOAD_CART } from "../ActionTypes/cart";
import { CLEAR_ERRORS } from "../ActionTypes/user";

//add item to cart
export const addToCart = (user_id,product_id,qt) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        const result=await axios.get(`/api/cart/${user_id}/${product_id}`)
        dispatch({type:CART_ADD_ITEM, payload:result.data.user.cart})
    } catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response });
        
    }
}

//CURRENT USER_id
export const current_cart = () => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      let result = await axios.get("/api/cart/", config);
      dispatch({ type: CURRENT_CART, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CART, payload: error.response});
   
    }
  };

//delete cart item
export const deleteCartItem =(user_id,product_id) =>async (dispatch) =>  {

    dispatch({ type: LOAD_CART });
    try {
      
      await axios.delete(`api/cart/${user_id}/${product_id}/`);
      dispatch(current_cart());
    } catch (error) {
      dispatch({ type: FAIL_CART, payload: error.response });
    }
  };
  //empty cart
  export const emptyCart=(user_id) =>async (dispatch) =>  {  dispatch({ type: LOAD_CART });
  try {
    
    await axios.delete(`api/cart/${user_id}/`);
    dispatch(current_cart());
  } catch (error) {
    dispatch({ type: FAIL_CART, payload: error.response });
  }
};

//clear error
export const clearErrors =() => {
  return {type:CLEAR_ERRORS}
 }