import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        ShopMore
      </h1>
      <div className="options">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/product">
          <p>Products</p>
        </Link>
        <Link to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}
