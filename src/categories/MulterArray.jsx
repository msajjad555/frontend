import axios from 'axios'
import React, { useState } from 'react'

const MulterArray = () => {
  const [image, setImage] = useState([])
  const [category, setCategory] = useState('')
  const handleSubmit=()=>{
    let url='http://localhost:5000/products'
    let formData=new FormData()
    formData.append('category',category)
    Array.from(image).forEach(item=>{
      formData.append('product',item)
    })
    axios.post(url,formData)
  }
  return (
<>
{
  Array.from(image).map(item=>{
    return(<span>
      <img src={item?URL.createObjectURL(item):null}/>
    </span>)
  })
}

    
    <input type="file" multiple /><button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default MulterArray