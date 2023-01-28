import React,{useState} from 'react'

const ProductUpload = () => {
  const [img, setImg] = useState([])
  const [name, setName] = useState('')
  const handleSubmit=(e)=>{
    setImg([

      ...img,
      e.target.files[0],
      console.log(img,'imggg')
    ])
   
    let formData=new FormData()
    formData.append('name',name)
    Array.from(img).forEach(item=>{
      formData.append('images',item)
    })

  }
  return (

<>
{Array.from(img).map(item=>{
  return(
    <>
    <img src={item ? URL.createObjectURL(item):null} style={{height:100,width:100}}/>

    </>
  )
})}

<input type="file" multiple
onChange={(e)=>setImg(e.target.files)}

/>
<input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
<button onClick={handleSubmit}>submit</button>
</>
  )
}

export default ProductUpload