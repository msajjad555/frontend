import React from 'react'
import { Route,Navigate } from 'react-router-dom'


// const PrivateRoute = ({component:Component,...rest}) => {
//   return (
//   <>
//   <Route {...rest} component={(props)=>{
//     const token=window.localStorage.getItem('token');
//     // if(token){
//     //     return <Component{...props}/>
//     // }
//     // else{
//     //     return <Navigate to={`/signin`}/>
//     // }
//     if (token) {
//       return <Component {...props}/>
//     } else {
//       return <Navigate to={`/signin`}/>
//     }
//   }}/>
  
//   </>
//   )
// }

// export default PrivateRoute


 const PrivateRoute = (props) => {
  return (

<PrivateRoute {...props}/>

  )
}
export default PrivateRoute