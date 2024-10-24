import Product from "@/db/models/Product";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q") || "";

  let products;

  if (searchQuery) {
    products = await Product.collection()
      .find({ name: { $regex: searchQuery, $options: "i" } })
      .toArray();
  } else {
    products = await Product.getAll();
  }

  return Response.json(products);
}
