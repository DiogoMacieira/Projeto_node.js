import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { findById } from "../services/auth";
import { ExtendedPayload } from "../models/token";

const publicEndpoints = ["/auth/login", "/auth/register"];
export function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (publicEndpoints.includes(request.path)) {
    return next();
  }
  const authHeader = request.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return response.sendStatus(401).json({
      code: 401,
      message: "Token not found",
    });
  }

  verify(token, "VerySecretKeyToSignLogin", async (error, payload) => {
    if (error) {
      return response.status(403).json({
        code: 403,
        message: error.message,
      });
    }
    const { user_id: id } = payload as ExtendedPayload;
    request.user = await findById(id);
    next();
  });
}
