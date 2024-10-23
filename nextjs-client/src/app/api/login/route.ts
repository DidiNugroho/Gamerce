import User from "@/db/models/User";
import { comparePassword } from "@/helpers/bcrypt";
import { errorHandler } from "@/helpers/errorHandler";

export async function POST(request: Request) {
    try {
        const {email, password} = await request.json();

        const user = await User.findUser(email)

        if (!user || !comparePassword(password, user.password)) {
            throw {message: "Invalid Email/Password", status: 401}
        }

        return Response.json({message: "ok"})
    } catch (error) {
        return errorHandler(error)
    }
}