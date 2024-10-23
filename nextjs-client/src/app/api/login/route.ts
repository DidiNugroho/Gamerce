import User from "@/db/models/User";
import { comparePassword } from "@/helpers/bcrypt";
import { errorHandler } from "@/helpers/errorHandler";
import { signToken } from "@/helpers/jwt";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const {email, password} = await request.json();

        const user = await User.findUser(email)

        if (!user || !comparePassword(password, user.password)) {
            throw {message: "Invalid Email/Password", status: 401}
        }

        const payload = {_id: user._id.toString(), email: user.email, username: user.username}

        const token = signToken(payload)

        cookies().set("Authorization", `Bearer ${token}`)

        return Response.json({message: "ok", access_token: token})
    } catch (error) {
        return errorHandler(error)
    }
}