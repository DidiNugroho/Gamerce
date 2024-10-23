import { cookies } from "next/headers";
import { verifyWithJose } from "./helpers/jwt";
import { NextResponse } from "next/server";


export async function middleware(request: Request) {
  const auth = cookies().get("Authorization")?.value;

  if (!auth)
    return Response.json({ message: "please login first!" }, { status: 401 });

  const [type, token] = auth?.split(" ");

  if (!auth)
    return Response.json({ message: "please login first!" }, { status: 401 });

  if (type !== "Bearer")
    return Response.json({ message: "please login first!" }, { status: 401 });

  if (!token)
    return Response.json({ message: "please login first!" }, { status: 401 });

  const decoded = await verifyWithJose<{email: string, username: string, _id: string}>(token)

  const requestHeaders = new Headers(request.headers)
 
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  response.headers.set('x-user-id', decoded._id)
  response.headers.set('x-user-email', decoded.email)
  response.headers.set('x-user-username', decoded.username)
  
  return response
}

export const config = {
  matcher: ["/api/wishlist"],
};
