import axios from 'axios';
import {PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from '../Constant/productConstants'
export const listProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:PRODUCT_DETAILS_REQUEST
        });
        const {data}=await axios.get(`http://localhost:5000/products/${id}`)
console.log(data.product,'product details');
const {product}=data
        dispatch({type:PRODUCT_DETAILS_SUCCESS,
        payload:product
        })
    } catch (error) {
    dispatch({type:PRODUCT_DETAILS_FAIL,
    payload:error.payload
    })
    }
}