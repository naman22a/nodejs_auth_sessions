import { Router } from "express";
import { postLogout } from "../controllers/logout";
import { isAuth } from "../middleware/isAuth";

const router = Router();

router.post('/', isAuth, postLogout);

export default router;