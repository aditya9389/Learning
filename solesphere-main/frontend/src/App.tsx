import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
