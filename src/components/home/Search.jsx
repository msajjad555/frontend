import React,{useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';


const Search = (history) => {
    const [keyword, setKeyword] = useState('')
    // const navigate=useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`)
        }
        else{
           history.push('/products')
        }

    }

  return (
<>
<form action="" onSubmit={submitHandler}></form>
<input type="search"className='mt-2' onChange={(e)=>setKeyword(e.target.value)} />
{/* <button className='btn btn-success mb-4' type='submit' onSubmit={submitHandler}>sesrch</button> */}
<input type="submit" value='search' />
</>
  )
}

export default Search