//import
import axios from "axios";
import {
  CLEAR_ERRORS,
  FAIL_PAYMENT,
  GET_PAYMENT,
  GET_PAYMENTS,
  GET_USER_PAYMENTS,
  LOAD_PAYMENT,
} from "../ActionTypes/payment";

//add product
export const addPayment = (new_payment) => async (dispatch) => {
  dispatch({ type: LOAD_PAYMENT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result=await axios.post("/api/payment/addPayment", new_payment, config);
    dispatch({type:GET_PAYMENT,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_PAYMENT, payload: error.response.data.errors });
  }
};

export const getUserPayments =()=> async (dispatch)=>{
  dispatch({ type: LOAD_PAYMENT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result=await axios.get("/api/payment/user/", config);
    dispatch({type:GET_USER_PAYMENTS,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_PAYMENT, payload: error.response.data.errors });
  }

}
export const getAllPayments =()=> async (dispatch)=>{
  dispatch({ type: LOAD_PAYMENT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result=await axios.get("/api/payment/", config);
    dispatch({type:GET_PAYMENTS,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_PAYMENT, payload: error.response.data.errors });
  }

}
//edit product
export const editPayment = (id, newPayment) => async (dispatch) => {
  dispatch({ type: LOAD_PAYMENT });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/payment/editPayment/${id}`, newPayment,config);
    dispatch(getAllPayments());
  } catch (error) {
    dispatch({ type: FAIL_PAYMENT, payload: error.response.data.errors });
  }
};
//clear error
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
