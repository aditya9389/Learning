import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer/footer";
import WishlistList from "./WishlistList";
import EmptyWishlist from "./EmptyWishlist";
import AxiosInstance from "../AxiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

interface WishlistItem {
  id: number;
  image_url: string;
  productName: string;
  productColor: string;
  size: string;
  price: number;
}

const Wishlist = () => {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );
  const [itemList, setItemList] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const fetchWishlistItems = async () => {
    if (!user) return;
    try {
      const res = await AxiosInstance.get(`/api/wishlist/${user.id}`);
      setItemList(res.data);
    } catch (err) {
      console.error("Failed to fetch wishlist items:", err);
    } finally {
      setLoading(false);
    }
  };
  // ✅ Fetch cart count
  const fetchCartCount = async () => {
    if (!user) return;
    try {
      const res = await AxiosInstance.get(`/api/cart/${user.id}`);
      setCartCount(res.data.length); // adjust if backend returns differently
    } catch (err) {
      console.error("Failed to fetch cart count:", err);
    }
  };

  const deleteItem = async (productId: number) => {
    if (user) {
      try {
        await AxiosInstance.delete(`/api/wishlist/`, {
          data: { userId: user.id, productId },
        });
        await fetchWishlistItems();
      } catch (err) {
        console.error("Failed to delete wishlist item:", err);
      }
    }
  };

  useEffect(() => {
    fetchWishlistItems();
    fetchCartCount();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!itemList || itemList.length === 0) {
    return (
      <>
        <Header cartCount={0} wishlistCount={0} />
        <div className="mywishlist">
          <EmptyWishlist />
        </div>
        <div className="wfoo">
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Header cartCount={cartCount} wishlistCount={itemList.length} />
      {console.log(cartCount)}
      <div className="mywishlist">
        <div className="wishlist-title-container">
          <span className="title-wishlist">MY WISHLIST </span>
          <span className="title-wishlist wishlist-count mt-20">
            {itemList.length} items
          </span>
        </div>
        <WishlistList
          items={itemList}
          deleteItem={deleteItem}
          refresh={fetchWishlistItems} // ✅ Pass it here!
        />
      </div>
      <div className="wfoo">
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
