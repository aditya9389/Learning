// // reducers/index.ts
// import { combineReducers } from "redux";
// import { productReducer } from "./productReducer";
// import userReducer from "./userSlice";

// // ✅ This is your actual combined reducers
// const rootReducer = combineReducers({
//   allProducts: productReducer,
//   user: userReducer,
// });

// // ✅ Export both!
// export default rootReducer;

// // ✅ This is the type you need in store.ts
// export type RootState = ReturnType<typeof rootReducer>;

// reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  allProducts: productReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
