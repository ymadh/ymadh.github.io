import blogSlice from './blogSlice';
import { combineReducers } from 'redux';
import cartSlice from './cartSlice';


export default combineReducers({
  blogSlice,
  cartSlice
});