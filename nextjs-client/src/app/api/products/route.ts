import Product from '@/db/models/Product'

export async function GET(request: Request) {
    const products = await Product.getAll();
    return Response.json(products)
}