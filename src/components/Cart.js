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

    // const clearCart = () => {
    //     setCartItems([]);
    //     localStorage.removeItem("cart");
    // };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="cart-page">
            <h2>My Cart</h2>
            <div className="cart">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-header">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                        </div>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="descript-page">
                                        <span className="description">{item.name}</span>
                                        <span className="description">{item.brand}</span>
                                        <span className="description">{item.category}</span>
                                    </div>
                                    <div className="other">
                                        <span className="other1">{item.price}</span>
                                        <div className="quantity-control">
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>
                                        <img src="https://www.svgrepo.com/show/474726/bin.svg" width="30px" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
            </div>
        </div>
    );
}
