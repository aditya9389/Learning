import React from "react";
import "./checkout.css";
import Footer from "../Footer/footer";
import Header from "../Header";
import { useEffect } from "react";
import AxiosInstance from "../AxiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
function Checkout() {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );

  useEffect(() => {
    const clearCart = async () => {
      if (user) {
        try {
          await AxiosInstance.delete(`/api/cart/${user.id}`); // assuming API clears all items
          localStorage.removeItem("cart"); // optional if you store it locally
        } catch (err) {
          console.error("Error clearing cart:", err);
        }
      }
    };

    clearCart();
  }, [user]);
  return (
    <>
      <Header />
      <div className="checkout">
        <img
          alt="chekout-images"
          src="assets/images/checkout1.jpg"
          className="checkout-img"
        />
      </div>
      <div className="coFoo">
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
