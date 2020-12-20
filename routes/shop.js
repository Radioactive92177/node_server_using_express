import { Router } from "express";

import { products } from "./admin.js";

const router = Router();

router.get("/", (req, res, next) => {
  console.log(products);
  res.render("shop");
});

export { router as shopRoutes };
