import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET as string

export const signToken = (payload: {_id: string, email: string, username: string}) => jwt.sign(payload, SECRET_KEY)

export const verifyToken = (token: string) => jwt.sign(token, SECRET_KEY)

