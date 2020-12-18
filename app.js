import express from "express";
import bodyParser from "body-parser";

import { adminRoutes } from "./routes/admin.js";
import { shopRoutes } from "./routes/shop.js";

//? Initialising app for the server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//? Middlewares
app.use(adminRoutes);
app.use(shopRoutes);

//? Initialising server
app.listen(3000);
