import User from "@/db/models/User";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const { name, username, email, password } = await request.json();
    await User.register({ name, username, email, password });
    return Response.json({ message: "ok" });
  } catch (error: any) {
    let message = error.message || "Internal Server Error";
    let status = error.status || 500;

    if(error instanceof z.ZodError) {
        const errMessage = error.issues[0].message
        message = errMessage
        status = 400;
    }

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
