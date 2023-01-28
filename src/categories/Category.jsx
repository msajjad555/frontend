import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
  const [category, setCategory] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [parentCategoryId, setParentCategoryId] = useState('')
  const [userData, setUserData] = useState([])

const catgo=async(req,res)=>{
  const {data}=await axios.get('http://localhost:5000/category/getcategory')
  console.log(data.categoryList,'cat');
  setCategory(data.categoryList)
}  
// c
const postData=async(e)=>{
  e.preventDefault()

  await axios.post('http://localhost:5000/category/create',{

       categoryName,parentCategoryId
      }).then(res=>console.log('data posting',res))
  
    
 
  
}

useEffect(() => {
catgo()
}, [])
const rc=(categories)=>{
  let mc=[];
  for(let category of categories){
    mc.push(
      <li>
        {category.name}{
          category.children.length>0?(<ul>{rc(category.children)}</ul>):null
        }
      </li>
    )
  }

  return mc
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
<ul>{rc(category)}
{/* {JSON.stringify(createCategoryList(category))} */}
</ul>


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

export default Category