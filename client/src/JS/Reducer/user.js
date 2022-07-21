//import

import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../ActionTypes/user";

//initial state
const initialState = {
  user: null,
  loadUser: false,
  errors: [],
  isAuth: false,
  isAdmin: false
};

//pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
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
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        errors: [],
        isAuth: false,
        isAdmin: false
      };
    case FAIL_USER:
      return { ...state, errors: payload, loadUser: false };
    default:
      return state;
  }
};

//export
export default userReducer;
