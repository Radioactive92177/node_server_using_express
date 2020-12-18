import { Router } from "express";

const router = Router();

router.use("/", (req, res, next) => {
  console.log("I'm middleware 2");
  res.send("<h1>Hi from the server</h1>");
});

export { router as shopRoutes };
