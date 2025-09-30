"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router.post("/signup", userControllers_1.signupUser);
exports.default = router;
