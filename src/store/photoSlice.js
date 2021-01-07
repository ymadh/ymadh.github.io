import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api';
import * as config from '../config.json';      
import { createSelector } from 'reselect';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    list: [],
    loading: false,
    numItems: 12
  },
  reducers: {
   
    loadPhotos: (state, action) => {
      state.list = action.payload;
    },
    changeNumItems: (state, action) => {
      state.numItems = parseInt(action.payload);
    }
  }
});

export const {loadPhotos, changeNumItems} = photoSlice.actions;

export default photoSlice.reducer;

const url = 'photos';

  export function getPhotos() {
      return async dispatch => {
       
        try {
          const response = await fetch(config.apiUrl + url);
          const data = await response.json();
    
          dispatch(loadPhotos(data))
        } catch (error) {
          console.log(error);

          //todo handle errors
        }
      }
    };

    // export const getPaginatedBlogPosts = state =>  state.blogSlice.list;
    const photoSelector = state => state.photoSlice.list;
    export const numPhotoSelector = state => state.photoSlice.numItems;

    export const getPaginatedPhotos = createSelector(
      photoSelector,
      numPhotoSelector,
      (i, n) => i.slice(0,n));


