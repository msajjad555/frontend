import axios from "axios"

export const addProduct=(FormData)=>{
    return async dispatch=>{
        const res=await axios.post(`http://localhost:5000/product/create`,FormData);
        console.log(res.data.products.productPictures,'product uploaded');
    }
} 
