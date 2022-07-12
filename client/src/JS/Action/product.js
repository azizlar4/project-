//import
import axios from "axios";
import {
  FAIL_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCTS,
} from "../ActionTypes/product";

//get all products
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS });

  try {
    let result = await axios.get("/api/product/allProducts");
    dispatch({ type: GET_PRODUCTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};
//get one product
export const getOneProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS });

  try {
    let result = await axios.get(`/api/prodcut/${id}`);
    dispatch({ type: GET_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};

//add product
export const addProduct = (new_product) => async (dispatch) => {
  try {
    await axios.post("/api/prodcut/addProduct", new_product);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};

//delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/prodcut/deleteProduct/${id}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};
//edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/prodcut/editProduct/${id}`, newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};
