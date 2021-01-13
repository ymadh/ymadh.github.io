import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  { getProducts, addProductToCart } from '../../store/cartSlice';
import Product from './product';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    
    const handleAddToCart = (product) => {
        dispatch(addProductToCart(product));
    }
    return ( 
        <div>
            {products.map((product) => 
                <Product key={product._id} handleAdd={handleAddToCart} product={product} />
            )}
        
        </div>
     );
}
 
export default ProductList;