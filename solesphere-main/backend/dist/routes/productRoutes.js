"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = require("../controllers/productControllers");
const router = (0, express_1.Router)();
router.post("/import-products", productControllers_1.importProducts);
router.get("/products", productControllers_1.getAllProducts);
exports.default = router;
