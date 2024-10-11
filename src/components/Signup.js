import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './Signup.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data:', formData); // For now, log the data
        // Here you can add your API call to register the user
    };

    return (
        <div className="signup-page">
            <header>
                <nav className="navbar">
                    <ul className="nav-left">
                        <li>
                            <NavLink to="/home">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/020/292/685/non_2x/perfume-brand-name-monogrm-vector.jpg"
                                    alt="Perfume Brand Logo"
                                    className="logo"
                                    width="90px"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
