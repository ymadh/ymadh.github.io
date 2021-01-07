import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducer.js';

export default configureStore({
  reducer: combineReducers
});
