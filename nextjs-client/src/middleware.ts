import { cookies } from "next/headers";
import { verifyWithJose } from "./helpers/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const auth = cookies().get("Authorization")?.value;
  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    if (!auth)
      return Response.json({ message: "please login first!" }, { status: 401 });

    const [type, token] = auth?.split(" ");

    if (type !== "Bearer")
      return Response.json({ message: "please login first!" }, { status: 401 });

    if (!token)
      return Response.json({ message: "please login first!" }, { status: 401 });

    const decoded = await verifyWithJose<{
      email: string;
      username: string;
      _id: string;
    }>(token);

    const requestHeaders = new Headers(request.headers);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.headers.set("x-user-id", decoded._id);
    response.headers.set("x-user-email", decoded.email);
    response.headers.set("x-user-username", decoded.username);

    return response;
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!auth) {
      return NextResponse.redirect(new URL("/login", request.nextUrl.origin)); 
    }
  }
}

export const config = {
  matcher: ["/api/wishlist", "/wishlist"],
};
