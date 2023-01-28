import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import {listProduct} from '../../Redux/Action/listProductAction'
import { Link } from 'react-router-dom';
import { ADDTOCART } from '../../Redux/Action/cartAction';
// import '../../../node_modules/antd/dist/antd.css'
import {Pagination} from 'antd'
const Home = () => {

  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
   const dispatch=useDispatch()
  // const productList=useSelector((state=>state.productList))

  // const {loading,products,productPictures}=productList
  // console.log(products,'products');
  // useEffect(() => {
  // dispatch(listProduct())
  // }, [dispatch])
  const abc=async()=>{
    const {data}=await axios.get(`http://localhost:5000/products`)
    // const pro=data.products
      setProducts(data.products)
    console.log(data.products);
  }
  useEffect(() => {
  abc()
  
  }, [])
return(


   <>
{
products&&products.map((item)=>(
  <>
  {item.name}<br/>
  {/* {item.productPictures[0].img} */}
 
  <img className="card-img-top img-fluid"
   src={`http://localhost:5000/uploads/${item.productPictures[0].img}`} alt="Card image cap" style={{width:100,height:100}}/>
   
  </>
))
}
    
    </>
)
} 




   


export default Home