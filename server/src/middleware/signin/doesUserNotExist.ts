import { Request, Response, NextFunction } from "express";
import User from "../../interface/User";
import findUser from "../../utils/findUser";
import StatusCodes from "../../enums/StatusCodes";

const doesUserNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const email: string = req.body.email;
  const user: User | null = await findUser(email);

  if (user != null) {
    res.status(StatusCodes.CONFLICT).json({
      msg: "The email is already registered. Please Sign-In",
    });
    return;
  }

  return next();
};

export default doesUserNotExist;
