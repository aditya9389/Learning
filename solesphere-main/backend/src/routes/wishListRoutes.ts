// routes/wishlistRoutes.ts
import express from "express";
import {
  addWishlistItem,
  getWishlist,
  deleteWishlistItem,
} from "../controllers/wishListControllers";

const router = express.Router();

router.post("/", addWishlistItem); // POST /api/wishlist
router.get("/:userId", getWishlist); // GET /api/wishlist/1
router.delete("/", deleteWishlistItem); // DELETE /api/wishlist

export default router;
