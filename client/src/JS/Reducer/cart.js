import { CART_ADD_ITEM, CURRENT_CART, FAIL_CART, LOAD_CART } from "../ActionTypes/cart";
import { CLEAR_ERRORS } from "../ActionTypes/user";

//pure function
const cartReducer = (state = {cartItems:[],loadCart:false,errors:null,succ:false}, { type, payload }) => {
switch (type) {
    case LOAD_CART:
        return {...state,loadCart:true}
    case FAIL_CART:
        return {...state,errors:payload,loadCart:false}
    case CART_ADD_ITEM:
        return {...state,cartItems:payload,loadCart:false,succ:true}
    case CURRENT_CART:
        return {...state,cartItems:payload.cart,loadCart:false}
        case CLEAR_ERRORS:
      return { ...state, errors:null,succ:false };


    default:
        return state
}
}
export default cartReducer;