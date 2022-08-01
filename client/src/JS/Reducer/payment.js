import {
    CLEAR_ERRORS,
  FAIL_PAYMENT,
  GET_PAYMENT,
  GET_PAYMENTS,
  GET_USER_PAYMENTS,
  LOAD_PAYMENT,
} from "../ActionTypes/payment";

//initial state
const initialState = {
  payment: null,
  userPayments: [],
  allPayments: [],
  load: false,
  errors: null,
};
//pure function
const paymentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PAYMENT:
      return { ...state, load: false, payment: payload };
    case GET_USER_PAYMENTS:
      return { ...state, load: false, userPayments: payload };
    case GET_PAYMENTS:
      return { ...state, load: false, allPayments: payload.listPayments };
    case LOAD_PAYMENT:
      return { ...state, load: true };
    case FAIL_PAYMENT:
      return { ...state,load:false, errors: payload };
      case CLEAR_ERRORS:
        return { ...state, errors:null };

    default:
      return state;
  }
};
export default paymentReducer;