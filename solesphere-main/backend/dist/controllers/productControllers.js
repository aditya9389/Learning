"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.importProducts = void 0;
const db_1 = require("../db");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const importProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbPath = path_1.default.join(__dirname, "../../db.json");
        const rawData = fs_1.default.readFileSync(dbPath, "utf-8");
        const jsonData = JSON.parse(rawData);
        const categories = jsonData.Products;
        for (const category of categories) {
            const key = Object.keys(category)[0];
            const products = category[key];
            for (const product of products) {
                const { imageURL, type, productCategory, productName, productColor, size, qty, price, brandName, } = product;
                yield db_1.pool.query(`INSERT INTO products 
           (image_url, type, product_category, product_name, product_color, size, qty, price, brand_name) 
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [
                    imageURL,
                    type,
                    productCategory,
                    productName,
                    productColor,
                    size,
                    qty,
                    price,
                    brandName,
                ]);
            }
        }
        res.status(200).json({ message: "Products imported successfully" });
    }
    catch (error) {
        console.error("Error importing products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.importProducts = importProducts;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.pool.query("SELECT * FROM products ORDER BY id ASC");
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllProducts = getAllProducts;
