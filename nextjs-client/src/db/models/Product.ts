import { ProductType } from "@/types";
import { database } from "../config/mongodb";

interface ProductQuery {
  $and?: Array<{ name: { $regex: string; $options: string } }>;
}

class Product {
  static collection() {
    return database.collection<ProductType>("products");
  }

  static async getAll(
    limit: string | null,
    search: string | null,
    page: string | null
  ) {
    const query: ProductQuery = {};

    if (search) {
      const arr = search
        .split(" ")
        .map((el) => ({
          name: { $regex: el, $options: "i" }
        }));

      // Construct the $and query
      query.$and = arr.length > 0 ? arr : [{ name: { $regex: "", $options: "i" } }]; // Default to empty regex if no terms
    }

    const offset = limit ? Number(limit) : 5;
    const skip = ((page ? Number(page) : 1) - 1) * offset;

    const products = await this.collection()
      .find(query)
      .skip(skip)
      .limit(offset)
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
