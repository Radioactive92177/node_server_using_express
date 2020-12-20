import express from "express";
import bodyParser from "body-parser";

import { adminRoutes } from "./routes/admin.js";
import { shopRoutes } from "./routes/shop.js";

//? Initialising app for the server
const app = express();

//? Setting template engine
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

//? Middlewares
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404");
});

//? Initialising server
app.listen(3000);
