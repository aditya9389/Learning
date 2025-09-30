import "../CSS/header.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "./Footer/footer";
import Header from "./Header";
import Collection from "./Collection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/actions/productActions";

// Functional Home Component
export default function Home() {
  let cart = localStorage.getItem("cart");
  let wishlist = localStorage.getItem("wishlist");
  const [cartCount, setCartCount] = useState<number>(
    cart ? JSON.parse(cart).length : 0
  );
  const [wishlistCount, setWishlistCount] = useState<number>(
    wishlist ? JSON.parse(wishlist).length : 0
  );

  const updateCartCount = (count: number) => {
    setCartCount(count);
  };

  const updateWishlistCount = (count: number) => {
    setWishlistCount(count);
  };

  const data = useSelector((state: any) => state.allProducts.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchProducts.getProduct());
  }, []);

  return (
    <>
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      <div>
        <section
          className="section hero"
          style={{ backgroundImage: "url('./assets/images/banner.png')" }}
        >
          <div className="container-fluid bannerText">
            <div className="row">
              <div className="col-md-11">
                <div className="row">
                  <div className="col bannerPText">
                    <p className="hero-text">
                      Competently expedite alternative benefits whereas
                      leading-edge catalysts for change. Globally leverage
                      existing an expanded array of leadership.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 bannerBtnDiv">
                    <button className="btn btn-primary bannerBtn">
                      <span>Shop Now</span>
                      &nbsp;
                      <ArrowForwardIcon className="arrowRight" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Collection
        updateCartCount={setCartCount}
        updateWishlistCount={setWishlistCount}
        data={data}
      />
      <Footer />
    </>
  );
}
