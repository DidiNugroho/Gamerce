import Product from "@/db/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const product = await Product.getBySlug(slug);
    return Response.json(product);
  } catch (error: any) {
    const message = error.message || "Internal Server Error";
    const status = error.status || 500;
    return Response.json(
      {
        message: message,
      },
      {
        status: status,
      }
    );
  }
}
