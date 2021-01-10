import React from 'react';

const CartItemDetail = (props) => {

    const { product, onRemove, onDecrement, onIncrement } = props;
    const totalPrice = (product.price * product.quantity).toFixed(2);

    return ( 
         <div key={product.id} className="mt-2 row">
            <div className="col-md-1"><img alt={product.title} width="50px" src={product.thumbnailUrl} /></div>
            <div className="col-md-5">{product.title}</div>
            <div className="col-md-1 mt-1">
            Qty: {product.quantity}
            </div>
            <div className="col-md-2">
                <button type="button" onClick={onIncrement}  className="btn btn-link btn-xs">
                    <span className="fa fa-plus pr-2"> </span>
                </button>
                <button disabled={product.quantity === 0} type="button" onClick={onDecrement}  className="btn btn-link btn-xs">
                    <span className="fa fa-minus pr-2"> </span>
                </button>
            </div>
            <div className="col-md-2 mt-1">${totalPrice}</div>

            <div className="col-md-1">
                <button onClick={onRemove}type="button" className="btn btn-link btn-xs">
                    <span className="fa fa-trash"> </span>
                </button>
            </div>

        </div>
     )
}
 
export default CartItemDetail;