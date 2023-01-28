import axios from 'axios';
import {INITIALDATA_FAIL,PRODUCTS_SUCCESS,INITIALDATA_SUCCESS,INITIALDATA_REQUEST} from '../Constant/initialData'
export const getInitialData=()=>async(dispatch)=>{
dispatch({type:INITIALDATA_REQUEST})
        const res=await axios.post(`http://localhost:5000/initialData`);
const {categories,products}=res.data
    
    dispatch({type:INITIALDATA_SUCCESS,
payload:{categories}

    });
    dispatch({ type:PRODUCTS_SUCCESS,
    payload:{products}})
    console.log(res);
}