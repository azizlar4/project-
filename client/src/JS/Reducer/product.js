//import

import {
  CLEAR_EDIT,
  EDIT_PRODUCT,
  FAIL_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCTS,
} from "../ActionTypes/product";

//initial state
const initialState = {
  listProducts: [],
  loadProducts: false,
  errors: [],
  edits:null,
  productToGet: {},
};

//pure function
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, loadProducts: true };
    case GET_PRODUCTS:
      return { ...state, loadProducts: false, listProducts: payload.listProducts };
    case GET_PRODUCT:
      return { ...state, loadProducts: false, productToGet: payload };
    case EDIT_PRODUCT:
      return { ...state, loadProducts: false,edits:payload };
    case CLEAR_EDIT:
      return { ...state, loadProducts: false,edits:null };
    case FAIL_PRODUCTS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default productReducer;
