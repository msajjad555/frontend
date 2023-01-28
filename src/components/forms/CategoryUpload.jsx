import React, { useState } from 'react'

const CategoryUpload = () => {
    const [categoryName, setCategoryName] = useState('')
    const [ParentId, setParentId] = useState('')
  return (
   <>
   
   <input type='text' placeholder='category name'
   value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/><br/>
   <select>
    <option>select category</option>
   </select>
   
   </>
  )
}

export default CategoryUpload