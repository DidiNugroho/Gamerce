import Product from "@/db/models/Product";

type ErrorType = {
  message?: string;
  status?: number;
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const product = await Product.getBySlug(slug);
    return Response.json(product);
  } catch (error) {
    const message = (error as ErrorType).message || "Internal Server Error";
    const status = (error as ErrorType).status || 500;
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
