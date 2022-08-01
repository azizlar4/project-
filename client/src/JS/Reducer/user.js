//import

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

//initial state
const initialState = {
  users:[],
  user: null,
  loadUser: false,
  errors: null,
  isAuth: false,
  isAdmin: false,
  edit:null
};

//pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case GET_USERS:
      return { ...state, loadUser: false,users:payload };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        loadUser: false,
        isAuth: true,
        isAdmin: payload.user.isAdmin,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        isAuth: true,
        user: payload.user,
        isAdmin: payload.user.isAdmin,
      };
    case CURRENT_USER:
      return {
        ...state,
        loadUser: false,
        isAuth: true,
        user: payload,
        isAdmin: payload.isAdmin,
      };
    case EDIT_USER:
      return {
        ...state,
        loadUser: false,
        edit:payload
      };
    case CLEAR_EDIT:
      return {
        ...state,
        loadUser: false,
        edit:null
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        errors: null,
        isAuth: false,
        isAdmin: false
      };
    case FAIL_USER:
      return { ...state, errors:payload, loadUser: false };
    case CLEAR_ERRORS:
      return { ...state, errors:null };
    default:
      return state;
  }
};

//export
export default userReducer;
