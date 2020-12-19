import express from "express";
import bodyParser from "body-parser";
import { join } from "path";

import { adminRoutes } from "./routes/admin.js";
import { shopRoutes } from "./routes/shop.js";
import { rootNode } from "./utils/path.js";

//? Initialising app for the server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//? Middlewares
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(join(rootNode, "../", "views", "404.html"));
});

//? Initialising server
app.listen(3000);
