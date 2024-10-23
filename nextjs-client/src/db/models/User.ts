import { hashPassword } from "@/helpers/bcrypt";
import { database } from "../config/mongodb";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string({ message: "Name Required" }),
  username: z.string({ message: "Username Required" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string({ message: "Password Required" })
    .min(5, { message: "Password length must be more than 4" }),
});

type NewUser = z.infer<typeof UserSchema>;

class User {
  static collection() {
    return database.collection<NewUser>("users");
  }

  static async register(user: NewUser) {
    UserSchema.parse(user);

    const existingUser = await this.collection().findOne({
      $or: [{ username: user.username }, { email: user.email }],
    });

    if(existingUser) throw {message: "Email/Username already exist", status: 400};

    user.password = hashPassword(user.password)

    return this.collection().insertOne(user);
  }

  static async findUser(email: string) {
    const user = await this.collection().findOne({email})
    return user;
  }
}

export default User;
