import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import products from "../data/products";
import "./ProductDetails.css";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const navigate = useNavigate(); // Initialize useNavigate

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const productInCart = existingCart.find((item) => item.id === product.id);

        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert(`${product.name} added to cart!`);
        navigate("/cart"); // Navigate to Cart page after adding
    };

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} className="product-image-large" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>

            <button onClick={() => addToCart(product)} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
}
