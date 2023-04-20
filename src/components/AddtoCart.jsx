import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddtoCart() {
  const { addtocart, setAddtocart } = useSelector((data) => data);
  const navigate = useNavigate();

  function remove(id) {
    const newlist = addtocart.filter((ele) => {
      return ele.id !== id;
    });
    setAddtocart(newlist);
  }

  return (
    <div className="cart">
      {addtocart.length !== 0 ? (
        addtocart.map((item) => {
          return (
            <div className="cartItem">
              <div>
                <img src={item.ele.image} width={80} height={80} alt="" />
              </div>
              <div>
                <h3>{item.ele.title}</h3>
                <br />
                <br />
                <h2>${item.ele.price}</h2>
              </div>
              <div>
                <button
                  onClick={() => {
                    remove(item.id);
                    toast.success("Item removed from Cart");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h1 style={{ color: "red", marginBottom: "1rem" }}>
            Your Cart is Empty{" "}
          </h1>
          <h3>
            To add items please go to{" "}
            <b
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                navigate("/product");
              }}
            >
              Products
            </b>{" "}
            page
          </h3>
        </div>
      )}
    </div>
  );
}
