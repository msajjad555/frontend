import React from 'react'
import { useSelector } from 'react-redux'
import './category.css'
const CategoryDisplay = () => {
    const category=useSelector((state=>state.categoryList.categories))
    const rc=(categories)=>{
        let mc=[];
        for(let category of categories){
          mc.push(
            <li>
              {category.name}{
                category.children.length>0?(<ul>{rc(category.children)}</ul>):null
              }
            </li>
          )
       }
       return mc
      }

  return (
   <>
   <div className="menuHeader">
 <ul style={{listStyle:'none',textDecoration:'none'}}>{rc(category)}
{/* {JSON.stringify(createCategoryList(category))} */}
</ul> </div>
   
   </>
  )
}

export default CategoryDisplay