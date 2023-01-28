import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {listProduct} from '../../Redux/Action/listProductAction'
export const CheckCat = () => {
    const category=useSelector((state=>state.categoryList.categories))
    const productList=useSelector((state=>state.productList))
    const {loading,products,productPictures}=productList
    console.log(category,'category');
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(listProduct())
        }, [dispatch])
  return (
<>
<div className="container">
    <div className="row">
        <div className="col-lg-3">
        {
    category&&category.map((elem)=>(
        <>
        {elem.name}<br/>
        </>
    ))
}</div>
<div className="col-lg-9">


{products&&products
//  .filter(it=>{return it.name.toLowerCase().includes(filter.toLowerCase())})
//  .filter(itt=>{return itt.discription.toLowerCase().includes(filter.toLowerCase())})



.map((item,i)=>(
    <>
<div className="card" style={{width:'16rem',height:'30rem',margin:'10px'}}>
  <div className='img-name text-center'><h1>{item.name}</h1></div>
  <Link  to={`/products/${item._id}`} target='_blank'>
  
    <img className="card-img-top img-fluid" src={`http://localhost:5000/uploads/${item.productPictures[0].img}`} alt="Card image cap"/>
    </Link>
    {/* <img className="card-img-top img-fluid" src={`/uploads/${item.productPictures[0].filename}`} alt="Card image cap"/> */}
     
    {item.description}<br/>
    {item.quantity}<br/>
    {item.category.name}
 
 {/* {item.productPictures[0]._id} */}

 

    <Link to='/c'><h5 className="card-title text-center">{item.price}</h5></Link>
    <p className="card-text text-center">{item.discription}</p>
    <div className='text-center'>
      {/* {item.category._id} */}
    {/* <a href="#" className="btn btn-primary align-item-center">{item.category.name}</a> */}

  </div></div>



</>





  ))}
  </div></div></div></>
  )
}
