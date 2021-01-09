import { createSlice } from '@reduxjs/toolkit'
import * as config from '../config.json';      
import { createSelector } from 'reselect';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    list: [],
    loading: false,
    numBlogs: 6,
    currentPage: 1
  },
  reducers: {
    addBlogPost: (state, action) => {
        state.list.push(action.payload);
    },
    loadBlogPosts: (state, action) => {
      state.list = action.payload;
    },
    changeNumBlogs: (state, action) => {
      state.numBlogs = parseInt(action.payload);
      state.currentPage = 1;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = state.currentPage + parseInt(action.payload);
    }
  }
});

export const {addBlogPost, loadBlogPosts, changeNumBlogs, changeCurrentPage} = blogSlice.actions;

export default blogSlice.reducer;

const url = 'posts';


  export function getBlogPosts() {
      return async dispatch => {
       
        try {
          const response = await fetch(config.apiUrl + url);
          const data = await response.json();
    
          dispatch(loadBlogPosts(data))
        } catch (error) {
          console.log(error);
          // dispatch(getRecipesFailure())
        }
      }
    };

    // export const getPaginatedBlogPosts = state =>  state.blogSlice.list;
    const blogSelector = state => state.blogSlice.list;
    const pageSelector = state => state.blogSlice.currentPage;
    export const numBlogsSelector = state => state.blogSlice.numBlogs;

    export const getPaginatedBlogPosts = createSelector(
      blogSelector,
      numBlogsSelector,
      pageSelector,
      (items, num, page) => {
        let sliceBeg = (page - 1) * num;
        return items.slice(sliceBeg, sliceBeg + num);
      });



