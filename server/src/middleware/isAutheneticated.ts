import { Request, Response, NextFunction } from "express";
import StatusCodes from "../enums/StatusCodes";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../interface/User";
import findUser from "../utils/findUser";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const token = req.headers.authorization;

  if (SECRET_KEY == undefined) {
    throw new Error("SECRET KEY DOES NOT EXIST");
  }

  if (token == null) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      msg: "Authorization Required",
      error: "JWT Bearer token is required",
    });
    return;
  }

  const signature = tokenToSignature(token);

  try {
    const jwtResponse = jwt.verify(signature, SECRET_KEY);

    if (typeof jwtResponse === "string") {
      throw new Error("Failed to verify error");
      return;
    }

    const user: User | null = await findUser(jwtResponse.email);

    if (user == null) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        msg: "Unauthorized Request",
        error: "Please SignIn Again",
      });
      return;
    }

    req.user = user;
    return next();
  } catch (err) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      msg: "Unauthorized Request",
      error: "Requeired a valid jwt token",
    });
    return;
  }
};

const tokenToSignature = (token: string) => {
  return token.split(" ")[0];
};

export default isAuthenticated;
