import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  { getProducts, addProductToCart, getLoading } from '../../store/cartSlice';
import Product from './product';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const loading = useSelector(getLoading);

    const handleAddToCart = (product) => {
        dispatch(addProductToCart(product));
    }
    return ( 
        <div>
            {loading && <div className="text-center">
                <i class="fa fa-spinner fa-lg"></i>...Loading
                </div>}
            {products.map((product) => 
                <Product key={product._id} handleAdd={handleAddToCart} product={product} />
            )}
        
        </div>
     );
}
 
export default ProductList;