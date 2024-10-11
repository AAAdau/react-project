import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from localStorage when the component mounts
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <span>{item.name}</span> -
                                <span>Price: {item.price}</span> -
                                <span>Quantity: {item.quantity}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
            <Link to="/shop">Continue Shopping</Link>
        </div>
    );
}
