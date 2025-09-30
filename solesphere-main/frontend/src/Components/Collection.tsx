import "../CSS/header.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import NikeComponent from "./NikeComponent";
import InstaPostComponent from "./InstaPostComponent";
import Service from "./Service/Service";
import { fetchProducts } from "../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
console.log(BACKEND_URL);
interface CollectionProps {
  updateCartCount: React.Dispatch<React.SetStateAction<number>>;
  updateWishlistCount: React.Dispatch<React.SetStateAction<number>>;
  data: any;
}

export default function Collection(props: CollectionProps) {
  const [menProductArr, setMenProductArr] = useState([]);
  const [womenProductArr, setWomenProductArr] = useState([]);
  const [sportsProductArr, setSportsProductArr] = useState([]);
  const [bestSellerArr, setBestSellerArr] = useState([]);
  const [recommendedArr, setRecommendedArr] = useState([]);
  const [nikeSpecialArr, setNikeSpecialArr] = useState([]);
  const [instaPostArr, setInstaPostArr] = useState([]);

  const [allFilterBtn, setAllFilterBtn] = useState(true);
  const [pumaFilterBtn, setPumaFilterBtn] = useState(false);
  const [adidasFilterBtn, setAdidasFilterBtn] = useState(false);
  const [nikeFilterBtn, setNikeFilterBtn] = useState(false);
  const [bataFilterBtn, setBataFilterBtn] = useState(false);
  const [apexFilterBtn, setApexFilterBtn] = useState(false);

  const dispatch = useDispatch();
  const filterProducts = useSelector(
    (state: any) => state.allProducts.filterdProduct
  );
  const data = props.data;

  useEffect(() => {
    setMenProductArr(data[0]?.men_shoes);
    setWomenProductArr(data[1]?.women_shoes);
    setSportsProductArr(data[2]?.sports_shoes);
    setBestSellerArr(data[3]?.best_sellers);
    setRecommendedArr(data[4]?.recommended_pro);
    setNikeSpecialArr(data[5]?.nike_special);
    setInstaPostArr(data[6]?.insta_post);
  }, [data]);

  useEffect(() => {
    setMenProductArr(filterProducts[0]?.men_shoes);
    setWomenProductArr(filterProducts[1]?.women_shoes);
    setSportsProductArr(filterProducts[2]?.sports_shoes);
    setBestSellerArr(filterProducts[3]?.best_sellers);
  }, [filterProducts]);

  const filterAll = (filter: string) => {
    dispatch<any>(fetchProducts.filterProduct(filter));
    setAllFilterBtn(filter === "all");
    setNikeFilterBtn(filter === "nike");
    setAdidasFilterBtn(filter === "adidas");
    setPumaFilterBtn(filter === "puma");
    setBataFilterBtn(filter === "bata");
    setApexFilterBtn(filter === "apex");
  };

  return (
    <div>
      <section className="section collection mt-70">
        <div className="container">
          <ul className="collection-list has-scrollbar">
            <li>
              <div
                className="collection-card"
                style={{
                  backgroundImage: `url(${BACKEND_URL}/assets/images/top3.avif)`,
                }}
              >
                <h3 className="h4 card-title cardcolor">Men Collections</h3>
                <a href="#mensCollection" className="btn btn-secondary">
                  <span>Explore All</span>
                  &nbsp;
                  <ArrowForwardIcon className="arrowRight" />
                </a>
              </div>
            </li>
            <li>
              <div
                className="collection-card"
                style={{
                  backgroundImage: `url(${BACKEND_URL}/assets/images/top6.avif)`,
                }}
              >
                <h3 className="h4 card-title cardcolor">Women Collections</h3>
                <a href="#womensCollection" className="btn btn-secondary">
                  <span>Explore All</span>
                  &nbsp;
                  <ArrowForwardIcon className="arrowRight" />
                </a>
              </div>
            </li>
            <li>
              <div
                className="collection-card"
                style={{
                  backgroundImage: `url(${BACKEND_URL}/assets/images/top5.avif)`,
                }}
              >
                <h3 className="h4 card-title cardcolor">Sports Collections</h3>
                <a href="#sportsCollection" className="btn btn-secondary">
                  <span>Explore All</span>
                  &nbsp;
                  <ArrowForwardIcon className="arrowRight" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section collection mt-70">
        <div className="container">
          <ul className="filter-list" id="myBtnContainer">
            {["all", "nike", "adidas", "puma", "bata", "apex"].map((brand) => (
              <li key={brand}>
                <button
                  className={`filter-btn ${
                    brand === "all" && allFilterBtn
                      ? "btnPrimary"
                      : brand === "nike" && nikeFilterBtn
                      ? "btnPrimary"
                      : brand === "adidas" && adidasFilterBtn
                      ? "btnPrimary"
                      : brand === "puma" && pumaFilterBtn
                      ? "btnPrimary"
                      : brand === "bata" && bataFilterBtn
                      ? "btnPrimary"
                      : brand === "apex" && apexFilterBtn
                      ? "btnPrimary"
                      : ""
                  }`}
                  onClick={() => filterAll(brand)}
                >
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Sections */}
        <div className="container cat-section" id="mensCollection">
          <h2 className="h2 section-title">Men's Collection</h2>
          <FilterComponent
            arr={menProductArr}
            updateCartCount={props.updateCartCount}
            updateWishlistCount={props.updateWishlistCount}
          />
        </div>

        <div className="container cat-section" id="womensCollection">
          <h2 className="h2 section-title">Women's Collection</h2>
          <FilterComponent
            arr={womenProductArr}
            updateCartCount={props.updateCartCount}
            updateWishlistCount={props.updateWishlistCount}
          />
        </div>

        <div className="container cat-section" id="sportsCollection">
          <h2 className="h2 section-title">Sport's Collection</h2>
          <FilterComponent
            arr={sportsProductArr}
            updateCartCount={props.updateCartCount}
            updateWishlistCount={props.updateWishlistCount}
          />
        </div>

        <div className="container cat-section">
          <h2 className="h2 best_seller">Bestsellers Products</h2>
          <FilterComponent
            arr={bestSellerArr}
            updateCartCount={props.updateCartCount}
            updateWishlistCount={props.updateWishlistCount}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <ul className="cta-list">
            <li>
              <div
                className="cta-card"
                style={{
                  backgroundImage: `url(${BACKEND_URL}/assets/images/cta2.jpg)`,
                }}
              >
                <p className="card-subtitle">Adidas Shoes</p>
                <h3 className="h2 card-title">The Summer Sale Off 50%</h3>
                <a href="#" className="cta-btn btn-link">
                  <span>Shop Now</span>&nbsp;
                  <ArrowForwardIcon className="arrowRight" />
                </a>
              </div>
            </li>
            <li>
              <div
                className="cta-card"
                style={{
                  backgroundImage: `url(${BACKEND_URL}/assets/images/cta1.jpg)`,
                }}
              >
                <p className="card-subtitle">Nike Shoes</p>
                <h3 className="h2 card-title">Makes Yourself Keep Sporty</h3>
                <a href="#" className="cta-btn btn-link">
                  <span>Shop Now</span>&nbsp;
                  <ArrowForwardIcon className="arrowRight" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Nike Special */}
      <section className="section special mt-120">
        <div className="nike-container">
          <div
            className="special-banner"
            style={{
              backgroundImage: `url(${BACKEND_URL}/assets/images/n28.jpeg)`,
              backgroundSize: "330px",
            }}
          >
            <h2 className="h3 banner-title">New Trend Edition</h2>
            <a href="#" className="cta-btn btn-link">
              <span>Explore All</span>&nbsp;
              <ArrowForwardIcon className="arrowRight" />
            </a>
          </div>

          <div className="special-product">
            <h2 className="h2 section-title">
              <span className="text">Nike Special</span>
              <span className="line"></span>
            </h2>
            <NikeComponent
              arr={nikeSpecialArr}
              updateCartCount={props.updateCartCount}
              updateWishlistCount={props.updateWishlistCount}
            />
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="section cta mt-60">
        <div className="container cat-section">
          <h2 className="h2 best_seller">Recommended Products</h2>
          <FilterComponent
            arr={recommendedArr}
            updateCartCount={props.updateCartCount}
            updateWishlistCount={props.updateWishlistCount}
          />
        </div>
      </section>

      <section>
        <Service />
      </section>

      <section className="section insta-post">
        <InstaPostComponent arr={instaPostArr} />
      </section>
    </div>
  );
}
