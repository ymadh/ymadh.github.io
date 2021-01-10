import { createSlice } from '@reduxjs/toolkit'
import * as config from '../config.json';      
import { createSelector } from 'reselect';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    loading: false,
    cartProducts: []
    
  },
  reducers: {
    removeProduct: (state, action) => {
      
      const index = state.cartProducts.findIndex((item) => item.id === action.payload.id);
      state.cartProducts.splice(index, 1);
     
      

    },
    changeQuantity: (state, action) => {
      const { product, val } = action.payload;
      const index = state.cartProducts.findIndex((item) => item.id === product.id);
      state.cartProducts[index].quantity += parseInt(val);


    },
    addProductToCart: (state, action) => {

      // check to see if the product exists
      const index = state.cartProducts.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        const product = {...action.payload, quantity: 1};
        state.cartProducts.push(product);
      } else {
        state.cartProducts[index].quantity += 1;
      }
       
       
    },
    storeProducts: (state, action) => {
      state.products = action.payload;
      state.products.map((item) => {
        item.price = Number(Math.random() * 100).toFixed(2);
        if (item.id < 3) {
          item.quantity = 1;
          state.cartProducts.push(item);

        }
      })
    }
  }
});

export const { storeProducts, addProductToCart,changeQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;


// takes the free api url for photos
// adds a random price to the info
const url = 'photos';
export function loadProducts() {
  
  return async dispatch => {
   
    try {
      const response = await fetch(config.apiUrl + url);
      const data = await response.json();

      // only need 10 items.
      dispatch(storeProducts(data.splice(0,10)));
    } catch (error) {
      console.log(error);
    }
  }
};

 const productList = state => state.cartSlice.products;
 const cartList = state => state.cartSlice.cartProducts;

 export const getProducts = createSelector(
  productList,
  (items) => items.slice(0,10)
 );

 export const getCart = createSelector(
  cartList,
  (items) => items
 );
 export const getCartQuantity = createSelector(
  cartList,
  (items) => items.reduce((sum, item) => { return sum + item.quantity; }, 0)
 );

 export const getCartTotal = createSelector(
   cartList,
   (items) => 
   { return Math.round(items.reduce((total, item) =>  { return total + (item.quantity * parseFloat(item.price)); }, 0)).toFixed(2);  }
 
 )