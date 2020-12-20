import { join } from "path";

import { Router } from "express";

const router = Router();
const products = [];

router.get("/addProduct", (req, res, next) => {
  res.render("addProduct", { pageTitle: "Add Product" });
});

router.post("/product", (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
});

export { router as adminRoutes, products };
