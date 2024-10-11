import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Your Company Name. All Rights Reserved.</p>
                <nav className="footer-nav">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

