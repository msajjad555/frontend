
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Action/postProductAction';
const ProductUpload = () => {
    const dispatch=useDispatch();
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [selectedImages, setSelectedImages] = useState([])
  const onSelectFiles=(e)=>{
    const selectedFiles=e.target.files;
    const selectedFilesArray=Array.from(selectedFiles);
    const imageArray=selectedFilesArray.map((file)=>{
        return URL.createObjectURL(file)
    })
    setSelectedImages((selectedImages)=>selectedImages.concat(imageArray))
   
        // setSelectedImages([
        //   ...selectedImages,
        //   e.target.files[0]
        // ])
      
  }
  const postData=()=>{
    const formData=new FormData();
    formData.append('name',name);
    formData.append('quantity',quantity);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('category',categoryId);
  for (let pic of selectedImages){
    formData.append('selectedImages',pic)
  }
  dispatch(addProduct(formData))
  }
    return (
  <>
  <section>
  <button className='btn btn-success' onClick={postData}>submit</button>
 <label htmlFor='price'>price</label>
 <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)} /><br/>
 
 <label htmlFor='description'>descriptions</label>
 <input type="text" value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)} /><br/>
 
    
  <label htmlFor='name'>name&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
   
 <label htmlFor='quantity'>quantity&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="text" value={quantity} placeholder='quantity' onChange={(e)=>setQuantity(e.target.value)} 
 
 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
 
 <label htmlFor='price'>price</label>
 <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)} /><br/>
<label htmlFor='images'>
    add images<br/><span>up to 5</span>
    <input type='file' name='productPictures' multiple onChange={onSelectFiles}/>
</label>
{selectedImages&&selectedImages.map((images,index)=>(
    <>
    <img src={images}/> 
    <button onClick={()=>setSelectedImages(selectedImages.filter((e)=>e!==images))}>delete</button>
    </>
))}


  </section>
  
  </>
  )
}

export default ProductUpload