import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Action/postProductAction';
const UploadImages = () => {
    const [name, setName] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    // const [categoryId, setCategoryId] = useState('')
    const dispatch=useDispatch();
    const [productPictures, setProductPictures] = useState([])
    const onSelectFile=(e)=>{
    const selectedFiles=e.target.files[0];
    const selectedFilesArray=Array.from(selectedFiles);
    const productPicture=selectedFilesArray.map((file)=>{
      return URL.createObjectURL(file);
    }
    );
    setProductPictures([
        ...productPictures,
        e.target.files[0]
      ])
// setProductPictures((p)=>p.concat(productPictures))

  };
  const postData=()=>{
    const formData=new FormData();
    formData.append('name',name);
    formData.append('stock',stock);
    formData.append('price',price);
    formData.append('description',description);  

    for (let pic of productPictures){
        formData.append('productPictures',pic)
      }
    

  dispatch(addProduct(formData))
  }
  return (
<>
<section>
<label htmlFor='name'>name&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>

 <button className='btn btn-success' onClick={postData}>submit</button>

 <label htmlFor='stock'>stock&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
 <input type="text" value={stock} placeholder='stock' onChange={(e)=>setStock(e.target.value)} 
 
 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
 
 <label htmlFor='price'>price</label>
 <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)} /><br/>
 
 <label htmlFor='description'>description</label>
 <input type="text" value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)} /><br/>
 

<label>+Add iamges<br/><span>up to 5 images</span>
<input type='file' onChange={onSelectFile} multiple/></label><br/>
{productPictures.length>0 && (productPictures.length>5?(
   <div> <p> you </p><br/>
    <span>delete{productPictures.lenght - 5} of them {" "}</span></div>

):(
    <button onClick={()=>console.log('imges0')}>
        upload{productPictures.length}image{productPictures.length ===1?"":"5"}
    </button>
))}
<div className='image'>
{productPictures && productPictures.map((img1,index)=>(

    <>
    <img src={img1.file} alt=""  height='100' width='100'/>
    <button onClick={()=>setProductPictures(productPictures.filter((e)=>e!==img1))}>delete img</button>
    <p>{index + 1}</p>
    </>
))

}

</div>

</section>

</>
  )
}

export default UploadImages