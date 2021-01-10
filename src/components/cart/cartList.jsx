import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getCartTotal, changeQuantity, removeProduct } from '../../store/cartSlice';
import CartHeader from './cartHeader';
import CartItemDetail from './cartItemDetail';

const CartList = () => {

    const dispatch = useDispatch();
    const cart = useSelector(getCart);
    const cartTotal = useSelector(getCartTotal);
  
    const handleIncrementQuantity = (product) => {
        dispatch(changeQuantity({product, val: 1}));
    }

    const handleDecrementQuantity = (product) => {
        dispatch(changeQuantity({product, val: -1}));
    }

    const handleRemove = (product) => {
        dispatch(removeProduct(product));
    }
    return ( 
        <div className="container">
        <hr />
           <CartHeader />
            {cart.map((product) => <CartItemDetail 
              key={product.id}
              product={product} 
              onRemove={()=>{handleRemove(product)}}
              onDecrement={()=>{handleDecrementQuantity(product)}}
              onIncrement={()=>{handleIncrementQuantity(product)}}
               />
            )}
            <div className="row">
            <div className="col-md-2 offset-md-10">
            Total: $ {cartTotal}
            </div></div>
        </div>
       
     );
}
 
export default CartList;