import {combineReducers} from 'redux';
import { products, addToCart } from "./ProductReducer";
import { signIn } from "./AuthReducer";
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
   products,
   form:formReducer,
   addToCart,
   signIn
})