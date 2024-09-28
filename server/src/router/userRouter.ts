import { Router, Request, Response } from "express";
import isInputValidated from "../middleware/signin/isInputValidated";

const router = Router();

router.post("/signin", isInputValidated, (req: Request, res: Response) => {
  const responseBody = req.body;
});

router.post("/signup", (req: Request, res: Response) => {});

export default router;
