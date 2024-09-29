import { Request, Response, NextFunction } from "express";
import User from "../../interface/User";
import findUser from "../../utils/findUser";
import StatusCodes from "../../enums/StatusCodes";

const doesUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const email: string = req.body.email;
  const user: User | null = await findUser(email);

  if (user == null) {
    return res.status(StatusCodes.CONFLICT).json({
      msg: "The email is already registered. Please Sign-Up",
    });
  }

  return next();
};

export default doesUserExists;
