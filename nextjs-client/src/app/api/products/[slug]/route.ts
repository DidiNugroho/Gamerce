import Product from "@/db/models/Product";
import { errorHandler } from "@/helpers/errorHandler";


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const product = await Product.getBySlug(slug);
    return Response.json(product);
  } catch (error) {
    return errorHandler(error)
  }
}
