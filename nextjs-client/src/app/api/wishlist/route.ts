import { errorHandler } from "@/helpers/errorHandler"

export async function POST(request: Request) {
    try {
        const userId = request.headers.get("x-user-id")
        const { productId } = await request.json()
        const newWishlist = {
            userId: userId,
            productId: productId
        }
        return Response.json({message: "ok"})
    } catch (error) {
        return errorHandler(error)
    }
}