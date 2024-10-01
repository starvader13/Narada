import { Request, Response, NextFunction } from "express";
import User from "../../interface/User";
import findUser from "../../utils/findUser";
import StatusCodes from "../../enums/StatusCodes";

const doesUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  const user: User | null = await findUser(email);

  if (user == null) {
    res.status(StatusCodes.CONFLICT).json({
      msg: "The email is not registered. Please Sign-Up",
    });
    return;
  }

  if (user.password !== password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Either the email or the password is incorrect",
      error: "The password is incorrect",
    });
  }

  return next();
};

export default doesUserExist;
