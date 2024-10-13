import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchResults from "./components/SearchResults";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
