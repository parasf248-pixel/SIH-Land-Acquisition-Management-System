import { Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.validation";
import { sendError, sendSuccess } from "../../utils/apiResponse";

export const register = (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return sendError(
      res,
      "Validation failed",
      400,
      result.error.flatten().fieldErrors
    );
  }

  return sendSuccess(
    res,
    "Registration data is valid",
    result.data,
    200
  );
};

export const login = (req: Request, res: Response) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return sendError(
      res,
      "Validation failed",
      400,
      result.error.flatten().fieldErrors
    );
  }

  return sendSuccess(
    res,
    "Login data is valid",
    result.data,
    200
  );
};