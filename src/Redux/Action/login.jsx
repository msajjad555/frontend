import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
 
} from "../Constant/loginConstant";
import axios from "axios";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const data  = await axios.post(
      `http://localhost:5000/signin`,
      { email, password },
      config,
    );
console.log(data.data.user,'redux data');
    dispatch({ type: LOGIN_SUCCESS, payload: data.data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};