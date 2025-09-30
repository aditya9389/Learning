// routes/cartRoutes.ts
import express from "express";
import {
  handleAddToCart,
  getUserCart,
  deleteFromCart,
  handleUpdateCartItemQuantity,
  clearUserCart,
} from "../controllers/cartControllers";
const router = express.Router();

router.post("/addToCart", handleAddToCart); // POST /api/cart/add
router.get("/:userId", getUserCart); // e.g., GET /api/cart/1
router.delete("/:userId/:productId", deleteFromCart);
router.delete("/:userId", clearUserCart); // Clear all items in user's cart
router.put("/:userId/:productId", handleUpdateCartItemQuantity);
export default router;
