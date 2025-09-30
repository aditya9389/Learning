import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { productReducer } from "./reducers/productReducer";
import userReducer from "./reducers/userSlice";

// ✅ Slice-level persist config
const userPersistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
  allProducts: productReducer,
  user: persistedUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ✅ Now this works fine — no custom ActionObject
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
