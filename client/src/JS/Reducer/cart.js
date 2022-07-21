import { CART_ADD_ITEM, CART_REMOVE_ITEM, CURRENT_CART, FAIL_CART, LOAD_CART } from "../ActionTypes/cart";

//pure function
const cartReducer = (state = {cartItems:[],loadCart:false,errors:[]}, { type, payload }) => {
switch (type) {
    case LOAD_CART:
        return {...state,loadCart:true}
    case FAIL_CART:
        return {...state,loadCart:false,errors:payload}
    case CART_ADD_ITEM:
        return {...state,cartItems:payload,loadCart:false}
    case CURRENT_CART:
        return {...state,cartItems:payload.cart,loadCart:false}
    case CART_REMOVE_ITEM:
        return state


    default:
        return state
}
}
export default cartReducer;