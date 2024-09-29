import { Request, Response, Router } from "express";
import StatusCodes from "../enums/StatusCodes";
import doesUserExists from "../middleware/signin/doesUserExists";
import isInputValidated from "../middleware/signin/isInputValidated";
import createUser from "../utils/createUser";

const router = Router();

router.post(
  "/signup",
  isInputValidated,
  doesUserExists,
  async (req: Request, res: Response) => {
    const responseBody = req.body;

    const response = createUser(
      responseBody.name,
      responseBody.email,
      responseBody.password,
    ).catch(() => {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Failed to create a user. Internal Database Issue",
        error: "User creation failed",
      });
    });

    res.status(StatusCodes.OK).json({
      msg: "User Created successfully",
    });
  },
);

router.post("/signin", (req: Request, res: Response) => {});

export default router;
