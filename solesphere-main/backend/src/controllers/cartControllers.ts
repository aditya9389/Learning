// controllers/cartController.ts
import { Request, Response } from "express";
import { addToCart, updateCartItemQuantity } from "../models/cartModel";
// controllers/cartController.ts
import { getCartItemsByUserId } from "../models/cartModel";
import { pool } from "../db";

export const handleAddToCart = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const cartItem = await addToCart(userId, productId, quantity);
    res.status(200).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserCart = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = Number(req.params.userId);

    if (!userId) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const cartItems = await getCartItemsByUserId(userId);
    res.json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteFromCart = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userId, productId } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM cart WHERE user_id = $1 AND product_id = $2",
      [userId, productId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    res.status(200).json({ message: "Item deleted from cart successfully" });
  } catch (err) {
    console.error("❌ Delete cart item error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const handleUpdateCartItemQuantity = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (!userId || !productId || quantity === undefined) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const updatedItem = await updateCartItemQuantity(
      parseInt(userId),
      parseInt(productId),
      quantity
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    res.status(200).json({
      message: "Cart item quantity updated successfully.",
      updatedItem,
    });
  } catch (error) {
    console.error("Update Cart Item Error:", error);
    res.status(500).json({ message: "Server error." });
  }
};

//delete entire cart of user
export const clearUserCart = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userId } = req.params;

  try {
    const result = await pool.query("DELETE FROM cart WHERE user_id = $1", [
      userId,
    ]);
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    console.error("❌ Clear cart error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// // models/cartModel.ts
// import { pool } from "../db";

// // Add item to cart with ON CONFLICT
// export const handleAddToCart = async (
//   userId: number,
//   productId: number,
//   quantity: number
// ) => {
//   const result = await pool.query(
//     `
//     INSERT INTO cart (user_id, product_id, quantity)
//     VALUES ($1, $2, $3)
//     ON CONFLICT (user_id, product_id)
//     DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity
//     RETURNING *;
//     `,
//     [userId, productId, quantity]
//   );

//   return result.rows[0];
// };

// // Get all cart items for user
// export const getUserCart = async (userId: number) => {
//   const result = await pool.query(
//     `
//     SELECT c.*, p.product_name, p.price, p.image_url
//     FROM cart c
//     JOIN products p ON c.product_id = p.id
//     WHERE c.user_id = $1
//     `,
//     [userId]
//   );

//   return result.rows;
// };

// // Update quantity
// export const updateCartItemQuantity = async (
//   userId: number,
//   productId: number,
//   quantity: number
// ) => {
//   const result = await pool.query(
//     `
//     UPDATE cart
//     SET quantity = $3
//     WHERE user_id = $1 AND product_id = $2
//     RETURNING *;
//     `,
//     [userId, productId, quantity]
//   );

//   return result.rows[0];
// };
