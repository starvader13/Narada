import { Request, Response, Router } from "express";
import StatusCodes from "../enums/StatusCodes";
import doesUserExist from "../middleware/signin/doesUserExist";
import isSignInInputValidated from "../middleware/signin/isInputValidated";
import createUser from "../utils/createUser";
import doesUserNotExist from "../middleware/signup/doesUserNotExist";
import isSignUpInputValidated from "../middleware/signup/isInputValidated";
import generateBearerToken from "../utils/generateBearerToken";

const router = Router();

router.post(
  "/signup",
  isSignUpInputValidated,
  doesUserNotExist,
  async (req: Request, res: Response) => {
    const requestBody = req.body;

    const response = createUser(
      requestBody.name,
      requestBody.email,
      requestBody.password,
    ).catch(() => {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Failed to create a user. Internal Database Issue",
        error: "User creation failed",
      });
    });

    res.status(StatusCodes.OK).json({
      msg: "User Created successfully",
    });
  },
);

router.post(
  "/signin",
  isSignInInputValidated,
  doesUserExist,
  async (req: Request, res: Response) => {
    const requestBody = req.body;

    const token = generateBearerToken(requestBody.email);

    if (token == null) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "Failed to generate jwt token",
        error: "INTERNAL SERVER ERROR",
      });
    }

    res.status(StatusCodes.OK).json({
      msg: "Your bearer token has been generated",
      token: token,
      expiry: new Date().getDate() + 1,
    });
  },
);

export default router;
