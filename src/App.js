import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import AddtoCart from "./components/AddtoCart";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Cart } from "./redux/Action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [addtocart, setAddtocart] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Cart(addtocart, setAddtocart));
  }, [addtocart, dispatch]);
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/cart" element={<AddtoCart />}></Route>
        </Routes>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
