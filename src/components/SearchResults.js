import React from "react";
import { useLocation } from "react-router-dom"; // Hook to get the query parameters
import products from "../data/products";
import "./SearchResults.css"
export default function SearchResults() {
    const { search } = useLocation(); // Get the query parameters from the URL
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get("query")?.toLowerCase() || ""; // Extract the 'query' parameter and make it lowercase

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );

    return (
        <div className="search-results">
            <h2>Search Results for: "{query}"</h2>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>Brand: {product.brand}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
}
