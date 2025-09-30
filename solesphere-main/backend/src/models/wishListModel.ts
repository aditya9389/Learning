// models/wishlistModel.ts
import { pool } from "../db";

export const addToWishlist = async (userId: number, productId: number) => {
  const query = `
    INSERT INTO wishlist (user_id, product_id)
    VALUES ($1, $2)
    ON CONFLICT (user_id, product_id) DO NOTHING
    RETURNING *
  `;
  const result = await pool.query(query, [userId, productId]);
  console.log(result);
  return result.rows[0]; // returns undefined if already exists
};

export const getWishlistByUserId = async (userId: number) => {
  const query = `
    SELECT 
      w.id AS wishlist_id,
      p.*
    FROM wishlist w
    JOIN products p ON w.product_id = p.id
    WHERE w.user_id = $1
  `;
  const result = await pool.query(query, [userId]);
  return result.rows;
};

export const removeFromWishlist = async (userId: number, productId: number) => {
  const query = `
    DELETE FROM wishlist WHERE user_id = $1 AND product_id = $2
  `;
  await pool.query(query, [userId, productId]);
};
