import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import cartRoutes from "./routes/cartRoutes";
import wishListRoutes from "./routes/wishListRoutes";
import { pool } from "./db";
import { initDb } from "./initDb"; // ✅ import it

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve static files from public/assets
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));
// ✅ Init DB tables
initDb();
// ✅ Test DB connection
pool
  .connect()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch((err) => console.error("❌ PostgreSQL connection error:", err));

// ✅ API routes
app.use("/api", productRoutes);
app.use("/api/users", userRoutes); // ✅ NOT signupUser
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishListRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
