import { Request, Response } from "express";
import { pool } from "../db";
import fs from "fs";
import path from "path";

export const importProducts = async (req: Request, res: Response) => {
  try {
    const dbPath = path.join(__dirname, "../../db.json");
    const rawData = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const categories = jsonData.Products;

    for (const category of categories) {
      const key = Object.keys(category)[0];
      const products = category[key];

      for (const product of products) {
        const {
          imageURL,
          type,
          productCategory,
          productName,
          productColor,
          size,
          qty,
          price,
          brandName,
        } = product;

        await pool.query(
          `INSERT INTO products 
           (image_url, type, product_category, product_name, product_color, size, qty, price, brand_name) 
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
          [
            imageURL,
            type,
            productCategory,
            productName,
            productColor,
            size,
            qty,
            price,
            brandName,
          ]
        );
      }
    }

    res.status(200).json({ message: "Products imported successfully" });
  } catch (error) {
    console.error("Error importing products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

