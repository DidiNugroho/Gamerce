import { ProductType } from "@/types";
import { database } from "../config/mongodb";

class Product {
  static collection() {
    return database.collection<ProductType>("products");
  }

  static async getAll() {
    const products = await this.collection().find().toArray();
    return products;
  }

  static async search(query: string) {
    const regex = new RegExp(query, "i"); 
    const products = await this.collection()
      .find({ $or: [{ name: regex }, { tags: regex }] })
      .toArray();
    return products;
  }

  static async getBySlug(slug: string) {
    const product = await this.collection().findOne({ slug });
    if (!product) {
      throw { message: "Product not found", status: 404 };
    }
    return product;
  }
}

export default Product;
