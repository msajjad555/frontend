import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProduct } from '../../Redux/Action/filter'

const Search = () => {
  const dispatch=useDispatch()
  const [searchKey, setSearchKey] = useState('')
  const [category, setCategory] = useState('kitchen')
  return (
<>
<input type='text' value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>
<input type='text' value={category} onChange={(e)=>setCategory(e.target.value)}/>
<button onClick={()=>dispatch(filterProduct(searchKey))}>search</button>


</>
  )
}

export default Search