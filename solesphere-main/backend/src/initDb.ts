// // src/initDb.ts
// import { pool } from "./db";

// export const initDb = async () => {
//   try {
//     // Create users table
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL
//       );
//     `);

//     // Create products table
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS products (
//       id SERIAL PRIMARY KEY,
//       image_url TEXT NOT NULL,
//       type TEXT,
//       product_category TEXT,
//       product_name TEXT NOT NULL,
//       product_color TEXT,
//       size TEXT,
//       qty INTEGER,
//       price NUMERIC(10, 2),
//       brand_name TEXT
//     );
//     `);

//     // Create cart table
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS cart (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER REFERENCES users(id),
//         product_id INTEGER REFERENCES products(id),
//         quantity INTEGER DEFAULT 1
//       );
//     `);

//     // Create wishlist table
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS wishlist (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER REFERENCES users(id),
//         product_id INTEGER REFERENCES products(id)
//       );
//     `);

//     console.log("✅ All required tables checked/created.");
//   } catch (err) {
//     console.error("❌ Error initializing DB:", err);
//   }
// };

// src/initDb.ts
import { pool } from "./db";

export const initDb = async () => {
  try {
    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);

    // Products table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        type TEXT,
        product_category TEXT,
        product_name TEXT NOT NULL,
        product_color TEXT,
        size TEXT,
        qty INTEGER,
        price NUMERIC(10, 2),
        brand_name TEXT
      );
    `);

    // ✅ Cart table with UNIQUE constraint
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cart (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        product_id INTEGER REFERENCES products(id),
        quantity INTEGER DEFAULT 1,
        UNIQUE (user_id, product_id)
      );
    `);

    // ✅ Wishlist table with UNIQUE constraint (optional but useful)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS wishlist (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        product_id INTEGER REFERENCES products(id),
        UNIQUE (user_id, product_id)
      );
    `);

    console.log("✅ All required tables checked/created.");
  } catch (err) {
    console.error("❌ Error initializing DB:", err);
  }
};
