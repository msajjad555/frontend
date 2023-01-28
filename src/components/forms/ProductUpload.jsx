import axios from 'axios';
import React,{useState} from 'react'
import { Navigate } from "react-router-dom";

const ProductUpload = () => {
  // const navigate=useNavigate()
  const [image, setImage] = useState({
    name:"", category:"", price:"", discription:"", file:"",subcategory:"",
  })
  const handleInput=(e)=>{

setImage({...image,[e.target.name]:e.target.value})


  }


  const picUpload=(e)=>{
setImage({...image,file:e.target.files[0]})}

const postData=async ()=>{
  let url='http://localhost:5000/products'
  const formData=new FormData() 
  formData.append('file',image.file,image.file.name)
  formData.append('category',image.category)
  formData.append('subcategory',image.subcategory)
  formData.append('price',image.price)
  formData.append('discription', image.discription)
  formData.append('name', image.name)
  const res=await axios.post(url,formData)
  
 


}



  return (
  
    <>
     <div className="container">
    <div className="row">
    <button className="btn signup-button">
      <div className="col-6">
        <h1 className='text-center m-2'>upload image</h1>
      </div>
      </button> 
    </div>
   </div>
  <div className="container bg-primary">
    <div className="row">
    <form autocomplete="on">
      <div className="col-6">
        <div className="row">
          
          <div className="col-lg-6"><div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example1c">image name</label>
                      <input type="text" name="name"
                      value={image.name}
                      onChange={handleInput}
                      
                      id="form3Example1c" className="form-control" />
                    
                    </div>
                  </div></div>
 
                    
                    
                 
                    
                     
                  <div className="col-lg-6 col-md-4">    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example3c" >
              sub-category
                      
                      </label>
                      <select type="text" className='w-100 h-100' name='subcategory'
                      value={image.subcategory}
                      onChange={handleInput}>

                       {/* <option value=''>all</option> */}
                       <option value="radio">radio</option>
                       <option value="tv">tv</option>
                       <option value="cycle">cycle</option>
                       <option value="car">car</option>
                      </select>
                    </div>
                  </div></div>
                  <div className="col-lg-6 col-md-4">    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example3c" >
              category
                      
                      </label>
                      <select type="text" className='w-100 h-100' name='category'
                      value={image.category}
                      onChange={handleInput}>

                       <option value=''>all</option>
                       <option value="electronics">electronics</option>
                       <option value="kitchen">kitchen</option>
                       <option value="toys">toys</option>
                       <option value="industry">industry</option>
                      </select>
                    </div>
                  </div></div>
                  {/* <hr>hello</hr> */}
          <div className="col-6">
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="input-group has-validation">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example3c">PRICE</label>
                      <input type="text" name='price'
                      value={image.price}
                      onChange={handleInput}
                      id="form3Example3c" className="form-control" required/>
                     
                    </div>
                  </div></div>

                  </div>



<div className="col-6">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example4cd">DISCRIPTION</label>
                      <input type="text" name="discription"
                      value={image.discription}
                      onChange={handleInput}
                      id="form3Example4cd" className="form-control" />
                 
                    </div>
                  </div>
</div>
<div className="col-6">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label capital" htmlFor="form3Example4cd">upload image</label>
                      <input type="file" name="file"
                    
                      onChange={picUpload}
                      id="form3Example4cd" className="form-control" accept='.jpg,.png,.jpeg,.avif' />
                 
                    </div>
                  </div>
</div>
<div className="col-12">
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
             <button type="button" className="btn btn-primary btn-lg text-center capital"onClick={postData}
                     style={{background:"purple"}}>submit</button>
                  </div>
                  </div>




        </div>
      </div>
      </form>
    </div>
  </div>
    
    </>
  )
}

export default ProductUpload