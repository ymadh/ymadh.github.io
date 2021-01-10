import React from 'react';
import { NavLink } from 'react-router-dom';

const CartHeader = () => {
    return ( 
        <div className="row">
        <div className="col-md-6">
            <span className="fa fa-shopping-cart mr-2"></span> 
            Shopping Cart
        </div>
        <div className="col-md-6">
            <NavLink to="/redux/store" type="button" className="btn btn-primary btn-sm btn-block">
                <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
            </NavLink>
        </div>
    </div>
     );
}
 
export default CartHeader;