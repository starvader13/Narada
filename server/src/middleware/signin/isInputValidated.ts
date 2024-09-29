import { NextFunction, Request, Response } from "express";
import zod from "zod";
import StatusCodes from "../../enums/StatusCodes";

const inputValidationShema = zod.object({
  name: zod.string().max(50),
  email: zod.string().email(),
  password: zod.string().min(6),
});

const isInputValidated = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const requestBody = req.body;

  const zodResponse = inputValidationShema.safeParse(requestBody);

  if (!zodResponse.success) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      msg: "Input is not in the correct format",
      error: zodResponse.error.issues[0].message,
    });
    return;
  }

  return next();
};

export default isInputValidated;
