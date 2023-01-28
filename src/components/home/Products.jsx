import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import {getProduct, listProduct} from '../../Redux/Action/listProductAction'
import { Link, useParams } from 'react-router-dom';
import { getAllCategory } from '../../Redux/Action/catgoryAction';
import { Checkbox } from 'antd';
const Products=()=>{
  const params=useParams();
  const {id}=params;
  const keyword=params.keyword
  const createCategoryList=(categories,options=[])=>{
    for(let category of categories){
      options.push({
        value:category._id,
        name:category.name,
      });
      if(category.children.length>0){
        createCategoryList(category.children,options)
      }
    } 
    return options;
  }
  const category=useSelector(state=>state.categoryList.categories)
  const [categoryId, setCategoryId] = useState('')
  const [categoryI, setCategoryI] = useState('')
  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState([]);


//   const dispatch=useDispatch()
// const {data}=useSelector(state=>state.listProduct)
// console.log(data,'dataaa');

const handleDelete=async(id)=>{
  await axios.delete(`http://localhost:5000/product/${id}`).then((res)=>{
alert('deleted')

  })
  
  }
//   useEffect(() => {
//  abc()
//   }, [])
  

const handleUpdate=(e)=>{

}


const abc=async()=>{
  const {data}=await axios.get('http://localhost:5000/products')
  console.log(data.products,'bnbmn');
  const pro=data.products
    setProducts(pro)
}
useEffect(() => {
abc()

}, [])



return(
  <>
 
{/* <input type='search' onChange={searchHandle}/> */}
{/* <input type='search' value={categoryI} onChange={(e)=>setCategoryI(e.target.value)}/> */}
<select type='search' value={categoryI} onChange={(e)=>setCategoryI(e.target.value)}>

    <option selected='' value=''>all</option>
    {
      category.map((item)=>(
        <>

{/* <label htmlFor='cate'>{item.name}</label> */}

        <option>{item.name}</option>

    
        </>
      ))
    }
    
 
  
</select>
<input type='search' value={filter} onChange={(e)=>setFilter(e.target.value)}/>


  <div className="container">
  <div className="row">



{products&&products
 .filter(it=>{return it.category.name.toLowerCase().includes(categoryI.toLowerCase())})
 .filter(it=>{return it.name.toLowerCase().includes(filter.toLowerCase()) || 
  it.name.toLowerCase().includes(filter.toLowerCase())||
  it.category.name.toLowerCase().includes(filter.toLowerCase())||
  it.price.toString().includes(filter.toString())
})



.map((item,i)=>(
    <>
<div className="card" style={{width:'16rem',height:'30rem',margin:'10px'}}>
  <div className='img-name text-center'><h1>{item.name}</h1></div>
  <Link  to={`/products/${item._id}`}>
  
    <img className="card-img-top img-fluid" src={`http://localhost:5000/uploads/${item.productPictures[0].img}`} alt="Card image cap"/>
    
    </Link>
    {/* <img className="card-img-top img-fluid" src={`/uploads/${item.productPictures[0].filename}`} alt="Card image cap"/> */}
     
    {item.description}<br/>
    {item.quantity}<br/>
    {item.category.name}
    {/* <img src={item.category.categoryImage}/> */}
 
 {/* {item.productPictures[0]._id} */}

 

    <Link to='/c'><h5 className="card-title text-center">{item.price}</h5></Link>
    <p className="card-text text-center">{item.discription}</p>
    <div className='text-center'>
      {/* {item.category._id} */}
    {/* <a href="#" className="btn btn-primary align-item-center">{item.category.name}</a> */}
<button className='btn btn-dark m-3'onClick={()=>handleDelete(item._id)}>delete</button>
<Link to={'/update/'+item._id}target='_blank'><button className='btn btn-dark m-3'onClick={handleUpdate}>update</button></Link>
  </div></div>


  

    
    </>
  ))
} 

</div>
    
    </div>    
    </>
)
}

export default Products