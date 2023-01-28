import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getInitialData, initialData } from '../../Redux/Action/initailDataAction';
import { addCategory, getAllCategory } from '../../Redux/Action/catgoryAction';
import { useNavigate } from 'react-router-dom';

const NewCategory = () => {
  const Navigate=useNavigate();
    
    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryImage, setCategoryImage] = useState([])
    const category=useSelector((state=>state.categoryList.categories))
    console.log(category,'category yes');
    const dispatch=useDispatch()
useEffect(() => {
// dispatch(getAllCategory())
dispatch(getInitialData())


}, [dispatch])
const postData=()=>{
    const formData=new FormData()
formData.append('name',categoryName);
formData.append('parentId',parentCategoryId);
formData.append('categoryImage',categoryImage);
dispatch(addCategory(formData))
Navigate('/product')
}
// const postData=async(e)=>{
//     e.preventDefault()
  
//     await axios.post('http://localhost:5000/category/create',{
  
//          categoryName,parentCategoryId
//         }).then(res=>console.log('data posting',res))
    
      
   
    
//   }
  const handleCategoryImage=(e)=>{
    setCategoryImage(e.target.files[0])
  }

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

  return (
<>

 {/* <ul>{rc(category)} */}
{/* {JSON.stringify(createCategoryList(category))} */}
 {/* </ul>  */}

<input type='file' name='categoryImage' onChange={handleCategoryImage}/>
<input className='mt-2' type='text' placeholder='category name'
   value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} name='name'/><br/>
   <select className='mt-2'value={parentCategoryId} onChange={(e)=>setParentCategoryId(e.target.value)} name='parentId'>
    <option>select category</option>
    {createCategoryList(category).map(option=>
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
      )}
   </select><br/>
   <button className='btn btn-primary mt-2' onClick={postData}>palce category</button>
</>




  )
}

export default NewCategory