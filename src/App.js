import React, { useEffect } from 'react'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Footer1 from './components/footer/Footer1'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Upload from './components/home/Update'
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom'

import Home from './components/home/Home'
import Mainpage from './components/Card/Mainpage'

import Product from './components/home/Products'
import NewCategory from './components/category/NewCategory'
import ProductUpload from './components/home/ProductUpload'
import Form from './components/forms/FormNew'


import PD from './components/home/PD'

import { useDispatch } from 'react-redux'
import { getAllCategory } from './Redux/Action/catgoryAction'
import CategoryDisplay from './components/category/CategoryDisplay'
import Login from './components/forms/Login'
import store from './store'

import SignIn from './components/SignIN/SignIn'

import UploadImages from './components/home/UploadImages'
import NewProduct from './components/home/NewProduct'
import ProductDetails from './components/home/ProductsDetails'
import Search from './components/home/Search'
import Logup from './components/forms/Logup'
import { loadUser } from './Redux/Action/signin'
import Cookie from './components/Cookie'
import UserProfile from './components/UserProfile'
const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    store.dispatch(loadUser())
dispatch(getAllCategory())

  }, [dispatch])

  
  
  return (
    <>
    
    
    <Router>
{/* <Header/> */}


    <Navbar />
 
 
  



    <Routes>
 <Route path='/productupload' element={<ProductUpload/>}/>
 <Route path='/home' element={<Home/>}/>

 <Route path='/user/create' element={<Logup/>}/>
 {/* <Route path='/user' element={<SignIn/>}/> */}

      <Route path='/upload' element={<ProductUpload/>}/>
      <Route path='/productupload' element={<ProductUpload/>}/>
      <Route path='/category' element={<NewCategory/>}/>
      <Route path='/banner-images' element={<Banner/>}/>
    
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/products' element={<Product/>}/>
     <Route path='/products1' element={<UploadImages/>}/>
     <Route path='/banner' element={<CategoryDisplay/>}/>
     <Route path='/product' element={<NewProduct/>}/>
     {/* <Route path='/products/:id' element={<PD/>}/> */}
     <Route path='/products/:id' element={<ProductDetails/>}/>
     <Route path='/update/:id' element={<Upload/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/account' element={<UserProfile/>}/>
     <Route path='/products/:keyword' element={<Product/>}/>
   

     <Route path="/*" element={<p>Path not resolved</p>} />
    </Routes>
    <Footer1/>
   </Router>
    </>
  )
}

export default App