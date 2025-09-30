import CartSummary from "../Card/CardSummary";
import EmptyCart from "./EmptyCart";
import "./cart.css";
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer/footer";
import CardList from "../Card/CardList";
import AxiosInstance from "../AxiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

interface Item {
  id: number;
  qty: number;
  price: number;
}

export default function Cart() {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );
  console.log({ user });
  const wishlist = localStorage.getItem("wishlist");
  const [itemList, setItemList] = useState<Item[]>([]);

  // ✅ Fetch cart on mount
  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const res = await AxiosInstance.get(`/api/cart/${user.id}`);
          console.log(res);
          setItemList(res.data); // Adjust to your backend response shape
        } catch (err) {
          console.error("Error fetching cart:", err);
        }
      }
    };

    fetchCart();
  }, [user]);

  // ✅ If no items, render EmptyCart
  if (!itemList || itemList.length === 0) {
    return (
      <>
        <Header
          cartCount={0}
          wishlistCount={wishlist ? JSON.parse(wishlist).length : 0}
        />
        <EmptyCart />
        <div className="cfoo">
          <Footer />
        </div>
      </>
    );
  }

  // ✅ Compute subtotal
  const sum = itemList.reduce((acc, item) => acc + item.qty * item.price, 0);

  // ✅ Delete item: call backend then update state
  const deleteItem = async (item: Item) => {
    if (user) {
      try {
        await AxiosInstance.delete(`/api/cart/${user.id}/${item.id}`);
        const filteredList = itemList.filter((i) => i.id !== item.id);
        setItemList(filteredList);
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  // ✅ Update quantity: call backend then update state
  const updateQuantity = async (id: number, qty: number) => {
    if (user) {
      try {
        await AxiosInstance.put(`/api/cart/${user.id}/${id}`, {
          quantity: qty,
        });
        setItemList(
          itemList.map((i) => {
            if (i.id === id) {
              return { ...i, qty };
            }
            return i;
          })
        );
      } catch (err) {
        console.error("Update qty error:", err);
      }
    }
  };

  return (
    <>
      <Header
        cartCount={itemList.length}
        wishlistCount={wishlist ? JSON.parse(wishlist).length : 0}
      />
      <div className="mycart">
        <span className="title-cart">MY CART</span>
        <div className="cart-container">
          <CardList
            items={itemList}
            delete={deleteItem}
            updateQuantity={updateQuantity}
          />
          <CartSummary subTotal={sum} grandTotal={sum} />
        </div>
      </div>
      <div className="cfoo">
        <Footer />
      </div>
    </>
  );
}
