import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../redux/Action";
import "./products.css";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

export default function Products() {
  const dispatch = useDispatch();
  const { product, setAddtocart, addtocart } = useSelector((data) => data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product.length === 0) {
      setLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch(productAction(data));
        });
    } else {
      setLoading(false);
    }
  }, [loading, dispatch, product.length]);
  return (
    <div>
      <h1>Products</h1>
      <br />
      {loading ? (
        <Spinner />
      ) : (
        <div className="items">
          {product.map((ele) => {
            return (
              <div className="item">
                <img src={ele.image} alt="" width={250} height={250}></img>
                <div className="itemDetails">
                  <p>
                    <b>Price:</b> ${ele.price}
                  </p>
                  <p>
                    <b>Category:</b> {ele.category}
                  </p>
                  <button
                    className="cartbutton"
                    onClick={() => {
                      setAddtocart([
                        ...addtocart,
                        { ele: ele, id: Date.now() },
                      ]);
                      toast.success("Item added to Cart");
                    }}
                  >
                    AddtoCart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
