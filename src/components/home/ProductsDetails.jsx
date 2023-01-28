/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../Redux/Action/productDetailsAction';
import { addItemsToCart } from '../../Redux/Action/cartAction';
const ProductDetails = () => {
    // const [Product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(1)
    const params=useParams()
    const {id}=params
//     console.log(id,'id');
//    useEffect(() => {
//    const abc=async ()=>{
//     const {data}=await axios.get(`http://localhost:5000/products/${id}`)
// console.log(data.product,'pd page');
// setProduct(data.product)
// // console.log(result,'result');
// // const {category,discription ,file}=result
//    }
//  abc()
//    }, [id])
const dispatch=useDispatch();
const {product}=useSelector(state=>state.productDetails)

console.log(product,'prodetail');
useEffect(() => {
  dispatch(listProductDetails(id))

}, [dispatch,id])
const addToCartHandler=()=>{
dispatch(addItemsToCart(id,quantity))
}
const increaseQty=()=>{
  if(product.stock<=quantity){
    return;
  }
  const qty=quantity+1
  setQuantity(qty)
}
const decreaseQty=()=>{
  if(1<=quantity){
    return;
  }
  const qty=quantity-1
  setQuantity(qty)
}

   
  return (
   <>
<div className="container">
  <div className="row">
    <div className="col-lg-6">1
      {product.stock}<br/>
      {/* <img className="card-img-top img-fluid" src={`http://localhost:5000/uploads/${product.img}`} alt="Card image cap"/> */}
{/*       
   <div>{productPictures.map((file)=>(
 
 
 <img src={`/uploads/${file.filename}`}/>
    ))} */}
    
    
 {/* </div> */}
      {product.price}<br/>
      {/* {Product.countInStock}  */}
      <button className='btn btn-danger m-2' onClick={increaseQty} >+</button>
      <input type='number' value={quantity} readOnly/>
      <button className='btn btn-danger m-2' onClick={decreaseQty}>
        -
      </button>{''}
      <button className='btn btn-warning m-2' onClick={addToCartHandler}>add to cart</button>
      <div>status:{''}
      <p>{product.stock<1?'redColor':'greenColor'}</p>
      <p>{product.stock<1?'out of stock':'in Stock'}</p>
      </div>
      </div>
  
  </div>
</div>
   
   </>
  )
}

export default ProductDetails