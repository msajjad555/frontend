import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas';
const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:'',
    sel:''

}
function Form() {
  const  {values,errors,touched,handleBlur,handleChange,handleSubmit}=  useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values)=>{
              console.log(values);
        }
    })
  return (
<>
<form onSubmit={handleSubmit}>
<label htmlFor='name'>name</label>
<input type="text" name='name' 
value={values.name}
onChange={handleChange}
onBlur={handleBlur}

/>
<h1 className='text-danger'>{errors.name && touched.name?(
    <p>{errors.name}</p>
):null}</h1>
<label htmlFor='email'>email</label>
<input type="text" name='email'
value={values.email}
onChange={handleChange}
onBlur={handleBlur}
/>
{errors.email && touched.email?(
    <p>{errors.email}</p>
):null}
<label htmlFor='password'>password</label>
<input type="password" name='password'
value={values.password}
onChange={handleChange}
onBlur={handleBlur}
/>
{errors.password && touched.password?(
    <p>{errors.password}</p>
):null}
<label htmlFor='cpassword'>cpassword</label>
<input type="cpassword" name='cpassword'
value={values.cpassword}
onChange={handleChange}
onBlur={handleBlur}
/>
{errors.cpassword && touched.cpassword?(
    <p>{errors.cpassword}</p>
):null}

<select type='text' name='sel'
value={values.sel}
onChange={handleChange}
onBlur={handleBlur}
>
    <option value=''>select</option>
    <option value='electronics'>electronics</option>
    <option value='toys'>toys</option>
    <option value='tiger'>lion</option>
</select>
{errors.sel && touched.sel?(
    <p>{errors.sel}</p>
):null}
<button className='btn btn-primary' type='submit'>submit</button>
</form>
</>
  )
}

export default Form