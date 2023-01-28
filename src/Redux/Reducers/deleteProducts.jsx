import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS ,DELETE_PRODUCT_RESET} from '../Constant/productConstants'

export const deleteProduct=(
    state={product:{}},action)=>{
        switch(action.type){
            case DELETE_PRODUCT_REQUEST:
                return{loading:true,...state};
                case DELETE_PRODUCT_SUCCESS:
                    return {
                        loading:false,
                        product:action.payload
                    }
                    case DELETE_PRODUCT_RESET:
                        return{
                            loading:false,error:action.payload
                        }

                default:
                return state
        }
    }