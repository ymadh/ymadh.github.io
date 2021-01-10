import React from 'react';

const Product = (props) => {
    const { product, handleAdd } = props;
    return ( 
    
        <div className="row pt-2 mt-2 border-top">
            <div className="col-md-3"><img alt={product.title} width="100" src={product.thumbnailUrl} /></div>

            <div className="col-md-5">{product.title}</div>
            <div className="col-md-1">{product.price}</div>
            <div className="col-md-3"><button onClick={() => handleAdd(product)} className="btn btn-primary">Add to Cart</button></div>

       </div>
     );
}
 
export default Product;