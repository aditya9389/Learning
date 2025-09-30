// import axios from "axios";
// import { ActionType } from "./product-action-type";
// import { Dispatch } from "redux";

// export const fetchProducts = {
//   getProduct: () => async (dispatch: Dispatch) => {
//     // const response = await axios.get("http://localhost:5000/api/products");
//     const response = await axios.get("http://localhost:5001/Products");
//     dispatch({
//       type: ActionType.FETCH_PRODUCT,
//       payload: response.data,
//     });
//   },

//   filterProduct: (brandName: string) => {
//     return {
//       type: ActionType.FILTER_PRODUCT,
//       payload: brandName,
//     };
//   },
// };

import axios from "axios";
import { ActionType } from "./product-action-type";
import { Dispatch } from "redux";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// Define product type
interface Product {
  id: number;
  image_url: string;
  type: string;
  product_category: string;
  product_name: string;
  product_color: string;
  size: string;
  qty: string;
  price: string;
  brand_name: string;
}

export const fetchProducts = {
  getProduct: () => async (dispatch: Dispatch) => {
    const response = await axios.get(`${BACKEND_URL}/api/products`);
    const rawProducts: Product[] = response.data;

    // Normalize keys
    const products = rawProducts.map((p) => ({
      ...p,
      imageURL: p.image_url,
      productCategory: p.product_category,
      productName: p.product_name,
      brandName: p.brand_name,
      price: parseFloat(p.price),
    }));

    // Group by your categories
    const men_shoes = products.filter((p) =>
      p.productCategory?.toLowerCase().includes("men")
    );
    const women_shoes = products.filter((p) =>
      p.productCategory?.toLowerCase().includes("women")
    );
    const sports_shoes = products.filter((p) =>
      p.productName?.toLowerCase().includes("sports")
    );
    const best_sellers = products.slice(0, 6);
    const recommended_pro = products.slice(6, 12);
    const nike_special = products.filter(
      (p) => p.brandName?.toLowerCase() === "nike"
    );
    const insta_post = products.slice(12, 18);

    const groupedData = [
      { men_shoes },
      { women_shoes },
      { sports_shoes },
      { best_sellers },
      { recommended_pro },
      { nike_special },
      { insta_post },
    ];

    dispatch({
      type: ActionType.FETCH_PRODUCT,
      payload: groupedData,
    });
  },

  filterProduct: (brandName: string) => {
    return {
      type: ActionType.FILTER_PRODUCT,
      payload: brandName,
    };
  },
};
