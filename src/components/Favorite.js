import React, { useEffect, useState } from "react";
import './Favorite.css';
import products from "../data/products";

export default function Favorite() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const favoriteProducts = products.filter((product) => favorites.includes(product.id));

    return (
        <div className="favorite-page">
            <h2>My Favorites</h2>
            {favoriteProducts.length > 0 ? (
                <div className="product-list">
                    {favoriteProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <p>Brand: {product.brand}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>You have no favorite products yet.</p>
            )}
        </div>
    );
}
