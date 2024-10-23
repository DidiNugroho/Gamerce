import { database } from '../config/mongodb'

class Product {
    
    static collection() {
        return database.collection("products")
    }
    static async getAll() {
        return await this.collection().find().toArray()
    }
}

export default Product;