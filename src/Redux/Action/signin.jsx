import axios from 'axios'
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_FAIL,SIGNUP_FAIL,SIGNUP_REQUEST,SIGNUP_SUCCESS, LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,} from '../Constant/loginConstant';
export const signin=(email,password)=>async dispatch=>{
    try {
        dispatch({type:LOGIN_REQUEST});
        const config={headers:{'Content-type':'application/json'}}
        const data=await axios.post(`http://localhost:5000/signin`,{email,password},config)
   console.log(data,'data');
        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    } catch (error) {
        console.log(error);
    }
}

// // Login
// export const login = (email, password) => async (dispatch) => {
//     try {
//       dispatch({ type: LOGIN_REQUEST });
  
//       const config = { headers: { "Content-Type": "application/json" } };
  
//       const data  = await axios.post(`http://localhost:5000/signin`, { email, password }, config );
//   console.log(data,'redux data');
//       dispatch({ type: LOGIN_SUCCESS, payload: data.userExist });
//     } catch (error) {
//       dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
//     }
//   };
//register user
export const register=(userData)=>async dispatch=>{
try {
    dispatch({type:SIGNUP_REQUEST})
    const config={headers:{'Content-type':'multiple/form-data'}}
    const {data}=await axios.post(`http://localhost:5000/signup`,{userData},config)
dispatch({type:SIGNUP_SUCCESS,payload:data.user})
    
} catch (error) {
 console.log(error);   
}

}
// Load User
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`/me`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };