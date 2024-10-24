import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

class Wishlist {
  static collection() {
    return database.collection("wishlist");
  }

  static async addWishlist(payload: { userId: string; productId: string }) {
    const newWishlist = {
      userId: new ObjectId(payload.userId),
      productId: new ObjectId(payload.productId),
    };

    const result = await this.collection().insertOne(newWishlist);
    return result;
  }

  static async getUserWishlist(userId: string) {
    const wishlist = await this.collection().aggregate([
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "ProductData",
        },
      },
      {
        $unwind: {
          path: "$ProductData",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]).toArray();

    return wishlist;
  }
}

export default Wishlist;
