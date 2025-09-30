// controllers/wishlistController.ts
import { Request, Response } from "express";
import {
  addToWishlist,
  getWishlistByUserId,
  removeFromWishlist,
} from "../models/wishListModel";

export const addWishlistItem = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  try {
    const item = await addToWishlist(userId, productId);

    if (item) {
      res.status(201).json({
        message: "Item added to wishlist",
        item,
      });
    } else {
      res.status(200).json({
        message: "Item already in wishlist",
      });
    }
  } catch (err) {
    console.error("Add to wishlist error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getWishlist = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  try {
    const items = await getWishlistByUserId(userId);
    res.json(items);
  } catch (err) {
    console.error("Fetch wishlist error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteWishlistItem = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  try {
    await removeFromWishlist(userId, productId);
    res.status(204).send({
      message: "Wishlist item removed successfully",
    });
  } catch (err) {
    console.error("Remove wishlist error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
