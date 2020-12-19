import { join } from "path";

import { Router } from "express";
import { rootNode } from "../utils/path.js";

const router = Router();

router.get("/addProduct", (req, res, next) => {
  res.sendFile(join(rootNode, "../", "views", "addProduct.html"));
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export { router as adminRoutes };
