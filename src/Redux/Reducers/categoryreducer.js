import {CATEGORY_REQUEST,CATEGORY_SUCCESS, CATEGORY_FAIL,
ADD_NEW_CATEGORY_FAIL,ADD_NEW_CATEGORY_REQUEST,ADD_NEW_CATEGORY_SUCCESS} from '../Constant/categoryConstant';
// export const categoryListReducer=(state={categories:[]},action)=>{
//     switch(action.type){
//         case CATEGORY_REQUEST:
//             return {loading:true,categories:[]}
//             case CATEGORY_SUCCESS:
//                 return {loading:false,categories:action.payload.categories}
//     case CATEGORY_FAIL:
//         return {
//             loading:false,error:action.payload
//         }
//         default: 
//         return state;
//             }
// }
const initState={
    categories:[],loading:false,error:null
}
const buildNewCategories=(parentId,categories,category)=>{  
    let myCategories=[];

    for (let cat of categories){
        if(cat._id===parentId){
            myCategories.push({
                ...cat,
                children:cat.children && cat.children.length>0?buildNewCategories(parentId,[...cat.children,{
                    _id:category._id,
                    name:category.name,
                    parentId:category.parentId,
                    children:category.children,
                    // slug:category.slug,
                }],category):[]})
              
            
        }else{
            myCategories.push({
            ...cat,
            children:cat.children && cat.children.length>0?buildNewCategories(parentId,cat.children,category):[]
       })}
    }
    return myCategories;
}
export const categoryListReducer=(state=initState,action)=>{
    switch(action.type){
        case CATEGORY_SUCCESS:
           return {...state,
                categories:action.payload.categories}   
               
                // ended
                case ADD_NEW_CATEGORY_REQUEST:
                  return  {
                        ...state,
                        loading:true
                    }
                 
                    case ADD_NEW_CATEGORY_SUCCESS:
                        const category=action.payload.category;
                        const updatedCategory=buildNewCategories(category.parentId,state.categories,category)
                        console.log(updatedCategory,'updated');
                       return state={
                            ...state,
                            categories:updatedCategory,
                            loading:false,
                        }
                      
                        case ADD_NEW_CATEGORY_FAIL:
                       return {
                            ...initState,
                            loading:false,



                        }
                       
                        default:
                            return state; 
    
            }
           

    
}

