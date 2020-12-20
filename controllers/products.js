import { Product } from "../models/product.js";

const addProduct = (req, res, next) => {
  res.render("addProduct", { pageTitle: "Add Product" });
};

const setProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const showProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", { pageTitle: "Homepage" });
};

export { addProduct, setProducts, showProducts };
