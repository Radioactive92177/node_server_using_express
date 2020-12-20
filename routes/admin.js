import { join } from "path";

import { Router } from "express";

import { addProduct, setProducts } from "../controllers/products.js";

const router = Router();

router.get("/addProduct", addProduct);

router.post("/product", setProducts);

export { router as adminRoutes };
