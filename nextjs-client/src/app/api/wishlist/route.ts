import Wishlist from "@/db/models/Wishlist";
import { errorHandler } from "@/helpers/errorHandler";

export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");

    const body = await request.json();

    const { productId }: { productId: string | undefined } = body;

    if (!userId || !productId)
      throw { message: "product or user id is required" };

    const newWishlist = {
      userId: userId,
      productId: productId,
    };

    await Wishlist.addWishlist(newWishlist);

    return Response.json({ message: "ok" });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return errorHandler({ message: "product or user id is required" });
    }
    return errorHandler(error);
  }
}

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id");

        if(!userId) throw {message: "userId is required", status: 400 }
        
        const wishlist = await Wishlist.getUserWishlist(userId)
        

        return Response.json(wishlist)
    } catch (error) {
        return errorHandler(error)
    }
}
