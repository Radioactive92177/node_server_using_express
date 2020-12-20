import { Router } from "express";

import { showProducts } from "../controllers/products.js";

const router = Router();

router.get("/", showProducts);

export { router as shopRoutes };
