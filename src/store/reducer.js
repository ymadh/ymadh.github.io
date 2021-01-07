import blogSlice from './blogSlice';
import photoSlice from './photoSlice';
import { combineReducers } from 'redux';


export default combineReducers({
  blogSlice,
  photoSlice  
});