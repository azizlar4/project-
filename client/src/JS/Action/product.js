//import
import axios from "axios";
import {
  FAIL_PRODUCT,
  FAIL_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCT,
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
  dispatch({ type: LOAD_PRODUCT });

  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({ type: GET_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

//add product
export const addProduct = (new_product) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.post("/api/product/addProduct", new_product,config);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};

//delete product
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`/api/product/deleteProduct/${id}`,config);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};
//edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/product/editProduct/${id}`, newProduct,config);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};
//edit added quantity product
export const editAddedQuantityProduct = (id, newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/product/${id}`, newProduct,config);
  } catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response });
  }
};
