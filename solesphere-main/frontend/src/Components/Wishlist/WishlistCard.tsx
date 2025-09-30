import React from "react";
import "./wishlist.css";
import AxiosInstance from "../AxiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

interface WishlistCardProps {
  item: {
    id: number; // wishlist id in table
    product_id: number; // actual product id
    image_url: string;
    productName: string;
    productColor: string;
    size: string;
    price: number;
  };
  delete: (id: number) => void;
  refresh: () => void; // ✅ ✅ ✅ Add this line!
}

const WishlistCard = (props: WishlistCardProps) => {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );
  console.log(props);
  const handleDelete = () => {
    props.delete(props.item.id);
    // props.delete(props.item.product_id); // ← use product_id
  };

  const addToCart = async () => {
    if (!user) return;

    const payload = {
      userId: user.id,
      productId: props.item.id,
      quantity: 1,
    };
 

    console.log("Add to Cart payload:", payload);

    try {
      const res = await AxiosInstance.post("/api/cart/addToCart", payload);
      alert("Added to cart!");
      props.delete(props.item.id); // Remove from wishlist
      props.refresh();
    } catch (err: any) {
      console.error("Add to cart failed:", err?.response?.data || err);
      alert(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="grid-container-wishlist">
      <div className="grid-item-wishlist">
        <img src={props.item.image_url} className="wishlist-img" />
      </div>
      <div className="grid-item-wishlist">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 className="wishlist-item-name">{props.item.productName}</h3>
            <p className="text-height">
              <b>Color: </b>
              {props.item.productColor}
            </p>
            <p className="text-height">
              <b>Size: </b>
              {props.item.size}
            </p>
            <p className="text-height">
              <b>Price:</b> ${props.item.price}
            </p>
          </div>
          <div>
            <img
              className="text-height"
              onClick={handleDelete}
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                float: "right",
              }}
              src="assets/images/delete.png"
              alt="Delete"
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{ marginTop: "-10px", width: "100%" }}
          onClick={addToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
