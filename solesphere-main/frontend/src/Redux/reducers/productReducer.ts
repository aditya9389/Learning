const initialState = {
  product: [],
  filterdProduct: [],
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        product: action.payload,
        filterdProduct: action.payload,
      };
    case "FILTER_PRODUCT":
      const filtered =
        action.payload === "all"
          ? state.product
          : filterProductsByBrand(
              Object.values(state.product),
              action.payload.toUpperCase()
            );
      return {
        ...state,
        filterdProduct: filtered,
      };

    default:
      return state;
  }
};

function filterProductsByBrand(products: any, brandName: string) {
  return products
    .map((category: any) => {
      const filteredProducts = Object.entries(category).reduce(
        (acc: any, [key, value]: [string, any]) => {
          const filtered = value.filter(
            (product: any) => product.brandName === brandName
          );
          if (filtered.length > 0) {
            acc[key] = filtered;
          }
          return acc;
        },
        {}
      );
      return filteredProducts;
    })
    .filter((category: any) => Object.keys(category).length > 0);
}
