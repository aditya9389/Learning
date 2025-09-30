// models/cartModel.ts
import { pool } from "../db";

export const addToCart = async (
  userId: number,
  productId: number,
  quantity: number
) => {
  const query = `
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES ($1, $2, $3)
    ON CONFLICT (user_id, product_id) DO UPDATE SET quantity = cart.quantity + $3
    RETURNING *;
  `;
  const values = [userId, productId, quantity];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// models/cartModel.ts

export const getCartItemsByUserId = async (userId: number) => {
  const query = `
    SELECT 
      c.id AS cart_id,
      c.quantity,
      p.*
    FROM cart c
    JOIN products p ON c.product_id = p.id
    WHERE c.user_id = $1
  `;
  const result = await pool.query(query, [userId]);
  return result.rows;
};

// models/cartModel.ts

export const updateCartItemQuantity = async (
  userId: number,
  productId: number,
  quantity: number
) => {
  const query = `
    UPDATE cart
    SET quantity = $3
    WHERE user_id = $1 AND product_id = $2
    RETURNING *;
  `;
  const values = [userId, productId, quantity];
  const result = await pool.query(query, values);

  return result.rows[0]; // returns the updated cart row
};
