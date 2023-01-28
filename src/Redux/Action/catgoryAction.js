 import axios from 'axios';
import {CATEGORY_REQUEST,CATEGORY_SUCCESS, CATEGORY_FAIL} from '../Constant/categoryConstant';

export const getAllCategory=()=>async(dispatch)=>{
try {
    dispatch({type:CATEGORY_REQUEST})
    const res=await axios.get('http://localhost:5000/category/getcategory')
const {categoryList}=res.data
console.log(categoryList,'cl');
    dispatch({
        type:CATEGORY_SUCCESS,
        payload:{categories:categoryList}
    })
} catch (error) {
    dispatch({type:CATEGORY_FAIL,
        payload:error.message}) 
}

}
export const addCategory=(formData)=>{
    return async dispatch=>{
        try {dispatch({type:CATEGORY_REQUEST})
        const res=await axios.post(`http://localhost:5000/category/create`,formData)
        console.log(res,'ress data');
        
            dispatch({type:CATEGORY_SUCCESS,
            payload:{category:res.data.category}})
            
        } catch (error) {
            dispatch({type:CATEGORY_FAIL,
                payload:error.message})
        }
        
        
           
            
        }
    



}