import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productListReducer, productReducer } from './Redux/Reducers/productListReducers';
import { productDetailsReducers } from './Redux/Reducers/productDetails';
import { categoryListReducer } from './Redux/Reducers/categoryreducer';
import { cartReducer, cartReducers } from './Redux/Reducers/cartReducers';
import { userReducer } from './Redux/Reducers/userReducers';
import { newOrderReducer } from './Redux/Reducers/orderReducer';

const reducer=combineReducers({

productList:productReducer,
productDetails:productDetailsReducers,
categoryList:categoryListReducer,
cartReducer:cartReducers,
userDetails:userReducer,
orderReducer:newOrderReducer,


});
let initialState={};
const middleware=[thunk];
const store=createStore(

    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store