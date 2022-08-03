//import
import axios from "axios";
import {
  CLEAR_EDIT,
  CLEAR_ERRORS,
  CURRENT_USER,
  EDIT_USER,
  FAIL_USER,
  GET_USERS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../ActionTypes/user";
import { emptyCart } from "./cart";

//get all users
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/allUsers",config);
    dispatch({ type: GET_USERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload:error.response.data.errors });
  }
};

//REGISTER USER
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("api/user/register", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//LOGIN USER
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//CURRENT USER
export const current_user = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
    
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors});
    console.log(error)

  }
};
//edit myProfile
export const updateProfile = (newProfile) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
   let result= await axios.put(`/api/user/updateMyProfile`, newProfile,config);
   dispatch({type:EDIT_USER,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
//edit Profile by admin
export const updateProfileAdmin = (id,newProfile) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
   let result= await axios.put(`/api/user/updateProfile/${id}`, newProfile,config);
   dispatch({type:EDIT_USER,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
//edit password
export const updatePassword = (newPass) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
   let result= await axios.put(`/api/user/updatePassword`, newPass,config);
   dispatch({type:EDIT_USER,payload:result.data})
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//LOGOUT
export const logout = (user_id) => (dispatch) => {
  dispatch(emptyCart(user_id))
  dispatch({ type: LOGOUT_USER });
 
};
//clear error
export const clearErrors =() => {
 return {type:CLEAR_ERRORS}
}
//clear edit
export const clearEdit =() => {
 return {type:CLEAR_EDIT}
}
