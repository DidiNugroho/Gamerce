import { database } from "../config/mongodb"

class Wishlist {
   static collection() {
        return database.collection("wishlist")
   }

   static async addWishlist(newWishlist: {userId: string, productId: string}) {
        const result = await this.collection().insertOne(newWishlist)

        return result;
   }
}

export default Wishlist