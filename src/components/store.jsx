import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { loadProducts } from '../store/cartSlice';
import ProductList from './products/productList';
import ShoppingCartIcon from './products/shoppingCartIcon';
import CartList from './cart/cartList';

const Store = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());


  }, [dispatch]);

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