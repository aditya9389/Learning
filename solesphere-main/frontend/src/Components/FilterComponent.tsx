import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";

import "../CSS/header.scss";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import AxiosInstance from "./AxiosInstance";

interface Item {
  id: number;
  imageURL: string;
  type: string;
  productCategory: string;
  productName: string;
  price: number;
}

interface CartProps {
  arr: Item[];
  updateCartCount: React.Dispatch<React.SetStateAction<number>>;
  updateWishlistCount: React.Dispatch<React.SetStateAction<number>>;
}

const FilterComponent = (props: CartProps) => {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );
  const navigate = useNavigate();

  const addToCart = async (item: Item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const res = await AxiosInstance.post("/api/cart/addToCart", {
        userId: user.id, // from Redux
        productId: item.id, // from the clicked product
        quantity: 1, // default quantity = 1
      });

      if (res.status === 200) {
        alert(res.data.message);

        // If your backend doesn't return a total count,
        // you can increment your count by 1:
        props.updateCartCount((prev) => prev + 1);
      } else {
        alert("Failed to add to cart.");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const addToWishList = async (item: Item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const res = await AxiosInstance.post("/api/wishlist", {
        userId: user.id, // from Redux
        productId: item.id,
      });

      if (res.status === 201) {
        alert(res.data.message);
        // If backend returns total count, use that
        // Otherwise just increment by 1
        props.updateWishlistCount((prev) => prev + 1);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Add to wishlist error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {console.log(props)}
      <ul className="product-list has-scrollbar">
        {props.arr &&
          props.arr.map((item, i) => (
            <li className="product-item puma" key={i}>
              <div className="product-card" tabIndex={0}>
                <figure className="card-banner">
                  <img
                    src={`http://localhost:5000/${item.imageURL}`}
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Running Sneaker Shoes"
                    className="image-contain"
                  />

                  {item.type === "" ? (
                    ""
                  ) : (
                    <div className="card-badge">{item.type}</div>
                  )}

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        aria-labelledby="card-label-2"
                        id="wl1"
                        className="card-action-btn"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <ShoppingCartOutlinedIcon sx={{ fontSize: "18px" }} />
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                        id="wl1"
                        onClick={() => {
                          addToWishList(item);
                        }}
                      >
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: "18px" }} />
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Wishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <RepeatOutlinedIcon sx={{ fontSize: "18px" }} />
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      {item.productCategory}
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">{item.productName}</a>
                  </h3>

                  <data className="card-price" id="price1" value="180.85">
                    {item.price}
                  </data>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FilterComponent;
