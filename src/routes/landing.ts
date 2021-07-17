import { Router } from "express";
import { getLanding } from "../controllers/landing";
import { isLoggedOut } from "../middleware/isLoggedOut";

const router = Router();

router.get('/', isLoggedOut, getLanding);

export default router;