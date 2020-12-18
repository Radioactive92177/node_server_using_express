import { Router } from "express";

const router = Router();

router.get("/add", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export { router as adminRoutes };
