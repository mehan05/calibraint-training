import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { response } from "./response.js";

export function validationResponse(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArr = errors.array().map((err) => err.msg);
    return response(400, true, errorArr, res);
  }
  next();
}
