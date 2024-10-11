import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import './Header.css';
import homelogo from "../images/perfume-brand-name-monogrm-vector.jpg";
import searchlogo from "../images/minimal-48-512.webp";
import cartlogo from "../images/purse.svg";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [cartCount, setCartCount] = useState(0); // State to store the cart count

    // Load cart count from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const count = storedCart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    }, []);

    // Handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${searchTerm}`);
        }
    };

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-left">
                    <li>
                        <NavLink to="/">
                            <img
                                src={homelogo}
                                alt="Perfume Brand Logo"
                                className="logo"
                                width="90px"
                            />
                        </NavLink>
                    </li>
                </ul>
                {location.pathname !== '/sign-up' && location.pathname !== '/login' && (
                    <>
                        <ul className="nav-right">
                            <li>
                                <NavLink to="/cart">
                                    <img className="purse" src={cartlogo} width="20px" />
                                    Cart {cartCount > 0 && `(${cartCount})`} {/* Show count if greater than 0 */}
                                </NavLink>
                            </li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/sign-up">Sign up</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                        <form className="search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search 10,000+ trusted brands"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            <button type="submit" className="search-button">
                                <img src={searchlogo} width="20px" />
                            </button>
                        </form>
                    </>
                )}
            </nav>
        </header>
    );
}
