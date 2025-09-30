import React from "react";
import "./emptyWishlist.css";

const EmptyWishlist = () => {
    return (
        <div className="w-cart">
            <img className="img-w-cart" src="assets/images/wishlist.png" alt="wishlist" />
            <h2>Wishlist is empty</h2>
        </div>
    );
};

export default EmptyWishlist;