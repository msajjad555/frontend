import axios from "axios";
import { FILTER_PRODUCT_REQUEST,FILTER_PRODUCT_SUCCESS,FILTER_PRODUCT_FAIL } from "../Constant/filter";

export const filterProduct=(searchKey,category)=>async(dispatch)=>{
   let filterdProduct; 
   dispatch({
    type:FILTER_PRODUCT_REQUEST
   });
   try {
    const {data}=await axios.get('http://localhost:5000/products')
console.log(data,'hooo');   
filterdProduct=data.filter((product)=>
    product.name.toLowerCase().includes(searchKey))
// filterdProduct=data.filter((product)=>
//     product.category.toLowerCase().includes(category)
// );
dispatch({type:FILTER_PRODUCT_SUCCESS,
payload:filterdProduct})
} catch (error) {
    dispatch({type:FILTER_PRODUCT_FAIL,payload:error})
   }
}