import { Router } from "express";
import {
  getAllProducts,
  importProducts,
} from "../controllers/productControllers";

const router = Router();

router.post("/import-products", importProducts);
router.get("/products", getAllProducts);

export default router;
