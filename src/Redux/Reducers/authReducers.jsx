import { LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAIL
,SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL } from "../Constant/loginConstant";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};


export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case LOGOUT_FAIL:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case SIGNUP_REQUEST:
      break;
    case SIGNUP_SUCCESS:
      break;
    case SIGNUP_FAIL:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
  }

  return state;
};
