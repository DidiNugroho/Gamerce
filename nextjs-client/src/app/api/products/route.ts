import Product from "@/db/models/Product";
import { errorHandler } from "@/helpers/errorHandler";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search") || "";
    const limit = url.searchParams.get("limit");
    const page = url.searchParams.get("page");

    const products = await Product.getAll(limit, searchQuery, page);

    return Response.json(products);
  } catch (error) {
    return errorHandler(error);
  }
}
