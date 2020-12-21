import fs from "fs";
import { rootNode } from "../utils/path.js";
import { join } from "path";
import pkg from "chalk";

const { green } = pkg;

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const products = Product.fetchAll();
    products.push(this);
    const dataJSON = JSON.stringify(products);
    fs.writeFileSync(join(rootNode, "..", "data", "products.json"), dataJSON);
    return green.inverse("Products saved");
  }

  static fetchAll() {
    try {
      const dataBuffer = fs.readFileSync(
        join(rootNode, "..", "data", "products.json")
      );
      const data = dataBuffer.toString();
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}

export { Product };
