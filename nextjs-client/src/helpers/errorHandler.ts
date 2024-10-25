import { z } from "zod";

type ErrorType = {
  message?: string;
  status?: number;
}

export const errorHandler = (error: unknown) => {
    let message = (error as ErrorType).message || "Internal Server Error";
    let status = (error as ErrorType).status || 500;

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