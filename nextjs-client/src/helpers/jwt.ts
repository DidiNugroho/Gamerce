import jwt from "jsonwebtoken";
import * as jose from "jose";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const signToken = (payload: {
  _id: string;
  email: string;
  username: string;
}) => jwt.sign(payload, SECRET_KEY);

export const verifyToken = (token: string) => jwt.sign(token, SECRET_KEY);

export const verifyWithJose = async<T>(token: string) => {
  const key = new TextEncoder().encode(SECRET_KEY);
  const result = await jose.jwtVerify<T>(token, key);

  return result.payload;
};
