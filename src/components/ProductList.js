import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProductList.css';
import products from "../data/products";

const brands = ["Brand A", "Brand B", "Brand C"];

export default function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [hoveringBrand, setHoveringBrand] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const navigate = useNavigate();

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        setSelectedBrand(null);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const filteredProducts = selectedCategory
        ? selectedCategory === "Brand" && selectedBrand
            ? products.filter((product) => product.brand === selectedBrand)
            : products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="shop-page">
            <div className="category-selection">
                <button onClick={() => handleCategorySelection("Women")}>Women</button>
                <button onClick={() => handleCategorySelection("Men")}>Men</button>

                <div
                    className="brand-dropdown"
                    onMouseEnter={() => setHoveringBrand(true)}
                    onMouseLeave={() => setHoveringBrand(false)}
                >
                    <button onClick={() => handleCategorySelection("Brand")}>Brand</button>

                    {hoveringBrand && (
                        <div className="brand-list">
                            {brands.map((brand) => (
                                <button key={brand} onClick={() => setSelectedBrand(brand)}>
                                    {brand}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 onClick={() => handleProductClick(product.id)} className="product-name">
                            {product.name}
                        </h3>
                        <p>{product.price}</p>
                        <p>Brand: {product.brand}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}