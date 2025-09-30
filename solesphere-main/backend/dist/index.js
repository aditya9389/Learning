"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ✅ Serve static files from public/assets
app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../public/assets")));
// ✅ Test DB connection
db_1.pool
    .connect()
    .then(() => console.log("✅ PostgreSQL connected"))
    .catch((err) => console.error("❌ PostgreSQL connection error:", err));
// ✅ API routes
app.use("/api", productRoutes_1.default);
app.use("/api/users", userRoutes_1.default); // ✅ NOT signupUser
app.get("/", (req, res) => {
    res.send("API is running...");
});
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
