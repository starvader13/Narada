import { Router, Request, Response } from "express";
import isAuthenticated from "../middleware/isAutheneticated";
import parserAddIsInputValidated from "../middleware/parser-add/isInputValidated";
import createRepository from "../utils/createRepository";
import StatusCodes from "../enums/StatusCodes";

const router = Router();

router.use(isAuthenticated);

router.post(
  "/add",
  parserAddIsInputValidated,
  async (req: Request, res: Response) => {
    const url = req.body.url;
    await createRepository(url, req.user.user_id).catch((err) => {
      return res.status(StatusCodes.FORBIDDEN).json({
        msg: "Something happened while adding data to repository",
        error: err,
      });
    });

    res.status(StatusCodes.OK).json({
      msg: "Data added successfully in repo",
    });
  },
);

export default router;
