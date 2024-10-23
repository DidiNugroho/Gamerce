import User from "@/db/models/User";
import { errorHandler } from "@/helpers/errorHandler";

export async function POST(request: Request) {
  try {
    const { name, username, email, password } = await request.json();
    await User.register({ name, username, email, password });
    return Response.json({ message: "ok" });
  } catch (error) {
    return errorHandler(error)
  }
}
