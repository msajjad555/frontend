import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Action/postProductAction';
import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas';
import './NewProducts.css'
import { useNavigate } from 'react-router-dom';
const NewProduct = () => {
 const Navigate=useNavigate();
 
  
  const [name, setName] = useState('')
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [productPictures, setProductPictures] = useState([])

  const category=useSelector((state=>state.categoryList.categories))
console.log(category,'usese');
const dispatch=useDispatch();
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


  const handleProductPictures=(e)=>{
    
    setProductPictures([

      ...productPictures,
      e.target.files[0],
      
    ])
    console.log(productPictures,'hhh');
  }

  const postData=()=>{
   const formData=new FormData();
    formData.append('name',name);
    formData.append('stock',stock);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('category',categoryId);
Array.from(productPictures).forEach(item=>{
  formData.append('productPictures',item)
})
  dispatch(addProduct(formData));
  Navigate ('/product')

  }


  return (
 <>

 <div className="container"><div className="row">
  <div className="col-lg-6 col-md-12">
  <div className='products'> 

  {name===''|| stock===0 ||description==='' || category==='' || productPictures==='' ? <> <button className='btn btn-success' disabled  onClick={postData}>submit</button> alert ('please file') </>:<><button className='btn btn-success'   onClick={postData}>submit</button></>}

  <table>
  
      <tr>
      <select className='mt-2' value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} name='parentId'>
    <option>select category</option>
    {createCategoryList(category).map(option=>
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
      )}
   </select><br/>
      <label htmlFor='name'>name&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
     
{/* <h1>{name===''?<>hello</>:<h1>number</h1>}</h1> */}
   </tr>
  </table>
 
 </div>
 <label htmlFor='quantity'>stock&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="number" value={stock} placeholder='stock' onChange={(e)=>setStock(e.target.value)} 
// {stock===''?'p':'yes'}
 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>


 <label htmlFor='price'>price</label>
 <input type="number" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)} /><br/>
 {/* {quantity===10?(true):alert(false)} */}
 <label htmlFor='description'>descriptions</label>
 <input type="text" value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)} /><br/>
 
 <label>+Add iamges<br/><span>up to 5 images</span>

<input type='file' multiple onChange={handleProductPictures}/></label><br/>

{productPictures.length>0 && (productPictures.length>5?(
   <div> <p> your limit is exceeded </p><br/>
    <span>please delete{productPictures.lenght - 5} of them {" "}</span>
 </div>
):(<div>
<button onClick={()=>console.log('imges0')}> 
       you have uploaded {productPictures.length}out of image 
       {productPictures.length ===1?"":"5"}
    </button> 
    </div>
    
))}
<div className='image'>
  <div className="container">
<div className="row d-flex flex-row">
</div>
</div>
</div>
  
  

 </div></div></div>
 <div className="col-lg-6">
<div className="row">
 
 {Array.from(productPictures).map((images,index)=>{
  return(
    <>
     <div className="col-lg-3">
      <button className='btn btn-dark'>{images.name}</button> <br/>
    <img src={images ? URL.createObjectURL(images):null} style={{height:100,width:100,margin:5}} alt=''/><br/>
  <button className='btn btn-warning m-1 text-center'>{index+1}</button><br/>
    <button className='btn btn-success m-1' onClick={()=>setProductPictures(productPictures.filter((e)=>e!==images))}>delete img</button>
    <hr/>
    </div>
    </>
  )
})}

</div>
   </div>
 </> 
  )
}

export default NewProduct