import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { loadProducts, getProducts } from '../store/cartSlice';
import ProductList from './products/productList';
import ShoppingCartIcon from './products/shoppingCartIcon';
import CartList from './cart/cartList';

const Store = () => {

  const dispatch = useDispatch();

  const numProducts = useSelector(getProducts);
  useEffect(() => {


    if (numProducts.length === 0) {
      dispatch(loadProducts());

    }


  }, []);

  return ( 
    <Switch>

      <Route path="/redux/store/cart">
        <CartList />
      </Route>
      <Route path="/redux/store">
        <ShoppingCartIcon />
        <ProductList />
      </Route>
    </Switch>

  );
}
 
export default Store;