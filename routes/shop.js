import { join } from "path";

import { Router } from "express";
import { rootNode } from "../utils/path.js";

const router = Router();

router.get("/", (req, res, next) => {
  res.sendFile(join(rootNode, "../", "views", "shop.html"));
});

export { router as shopRoutes };
