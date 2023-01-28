import React from 'react'
import { ErrorMessage,useField } from 'formik'

const TextField = ({label,...props}) => {
    const[field,meta]=useField(props)
  return (
    <div>
<label htmlFor={field.name}>{label}</label>
<h2><input 
className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
{...field}{...props}
/></h2>
<ErrorMessage name={field.name}/>
    </div>
  )
}

export default TextField