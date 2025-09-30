import "../CSS/header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";

interface CollectionCardProps {
  item: {
    id: string;
    imageURL: string;
    type: string;
    productCategory: string;
    productName: string;
    price: number;
  };
}

const CollectionCard = (props: CollectionCardProps) => {
  const addToCart = () => {
    // Add to cart logic
    alert("Add to cart");
  };

  const addToWishList = () => {
    // Add to wishlist logic
  };

  const { item } = props;
  console.log(item);
  return (
    <li className="product-item puma" key={item.id}>
      <div className="product-card" tabIndex={0}>
        <figure className="card-banner">
          <img
            src={item.imageURL}
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
                onClick={addToCart}
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
                onClick={addToWishList}
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
  );
};

export default CollectionCard;
