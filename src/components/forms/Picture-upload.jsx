import React,{useState} from 'react'
import{Formik,Form} from 'formik'
import './signup.css'
import TextField from './TextField'
import * as Yup from 'yup'
const Register = () => {
    const validate=Yup.object({
        firstName:Yup.string()
        .max(4,'must be')
        .required('Required'),
        lastName:Yup.string()
        .max(15,'must be')
        .required('required'),
        email:Yup.string()
        .max(15,'must be')
        .required('required'),
        password:Yup.string()
        .max(15,'must be')
        .required('required'),
        cpassword:Yup.string()
       .oneOf([Yup.ref('password'),null],'password must match')
        .required('confirm password is required required'),
    })
  return (
    <>
    <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
   <Formik
    initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        cpassword:'',


    }}
    validationSchema={validate}
    onSubmit={values=>{
        console.log(values);
    }}>
{formik=>(
    <div>

                 
             
        {/* {console.log(formik.values)} */}
   
<Form >
<TextField label='first Name' name='firstName' type='text'/>
<TextField label='last Name' name='lastName' type='text'/>
<TextField label='email' name='email' type='email'/>
<TextField label='password' name='password' type='password'/>
<TextField label='cpassword' name='cpassword' type='password'/>
<button type='submit'>Register</button>
<button type='reset' className='sign_form signin_btn'>Reset</button>
</Form>


</div>
)}


   </Formik>
   </div>
   </div>
</section>
</>
   )
}

export default Register