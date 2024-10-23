import { ProductType } from '@/types';
import { database } from '../config/mongodb'

class Product {
    
    static collection() {
        return database.collection<ProductType>("products")
    }
    static async getAll() {
        const products = await this.collection().find().toArray()
        return products
    }

    static async getBySlug(slug: string) {
        const product = await this.collection().findOne({slug})
        if(!product) {
            const error = {message: "Product not found", status: 404};
            throw error;
        }
        return product;
    }
}

export default Product;