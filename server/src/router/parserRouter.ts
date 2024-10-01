import { Router, Request, Response } from "express";
import isAuthenticated from "../middleware/isAutheneticated";

const router = Router();

router.use(isAuthenticated);

router.post("/add", (req: Request, res: Response) => {});

export default router;
