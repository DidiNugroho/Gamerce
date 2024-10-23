import { z } from "zod";

export const errorHandler = (error: any) => {
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