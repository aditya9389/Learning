import React from "react";
import "./emptyCart.css";

function EmptyCart() {
    return (
        <div className="e-cart">
            <img className="img-e-cart" src="assets/images/cart.png" alt="Cart" />
            <h2>Cart is empty</h2>
        </div>
    );
};

export default EmptyCart;