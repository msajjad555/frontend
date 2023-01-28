 
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Action/postProductAction';

import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [productPictures, setProductPictures] = useState([])
    const category=useSelector((state=>state.categoryList.categories))
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
        e.target.files[0]
      ])
    }
    console.log(productPictures);
    const postData=()=>{
        const formData=new FormData();
        formData.append('name',name);
        formData.append('stock',stock);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('category',categoryId);
      for (let pic of productPictures){
        formData.append('productPictures',pic)
      }
      dispatch(addProduct(formData))
      }
  
  return (
    <div>
        <div className='container py-5 my-5 bg-primary'>
            <div className='row'>
                <div className='fst col-lg-6 text-center text-white'>
                    <h4 className='py-3' >Login</h4>
                    <htmlForm className='ustad'>
                        <label className='un' htmlFor="uname">Name&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                        <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} /><br /><br />
                        <label className='stock'  htmlFor="mail"><b>stock</b>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                        <input type="text" value={stock} placeholder='stock' onChange={(e)=>setStock(e.target.value)}/><br/><br />
                        <label className='contact'  htmlFor="contact">Price&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                        <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)} /><br /><br />
                        <label className='pass'  htmlFor="pass">Description&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                        <input type="text" value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)} /><br /><br />
{/*                         
                        <label className='pass'  htmlFor="pass">Picture&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                        <input type="file" name='productPictures' placeholder='product Price' onChange={handleProductPictures} /><br /><br /> */}

                        <select className='mt-2' value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} name='parentId'>
    <option>select category</option>
    {createCategoryList(category).map(option=>
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
      )}
   </select>
                   
                   
                    </htmlForm>
                    <button className='btn btn-success' onClick={postData}>submit</button>
                </div>
                <div className='col-lg-6'>
                    <img style={{width:'400px'}} src="./img1/bg/bck6.jpg" alt="" />
                </div>
            </div>
        </div>


















    </div>
  )
}

export default Form