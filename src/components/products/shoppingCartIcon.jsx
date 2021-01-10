import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCartQuantity } from '../../store/cartSlice';
import { useSelector } from 'react-redux';

const ShoppingCartIcon = () => {

    const cart = useSelector(getCartQuantity);

    return (
        <div className="row">
            <div className="offset-md-11 col-md-1">
                <NavLink to="/redux/store/cart">
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        <span className="cart-count badge badge-danger badge-pill">{cart}</span>
                    </span>
                </NavLink>
            </div>
        </div>

    );
}

export default ShoppingCartIcon;