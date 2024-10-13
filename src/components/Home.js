import React from "react";
import "./Home.css";
import star from "../images/stars_rating_black.svg";
import perfume from "../images/360_F_765175234_m9BiY509l0sSvsOetjvZgXgeRxR0stom.jpg";
export default function Home() {
    return (
        <div className="page1">
            <img src={star} />
            <h2>over 20 million customers</h2>
            <div className="perfume-img">
                <img src={perfume} width="200px" />
            </div>
        </div>
    )
}