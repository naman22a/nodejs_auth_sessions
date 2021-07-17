import { Router } from "express";
import { getLogin, postLogin } from "../controllers/login";
import { isLoggedOut } from "../middleware/isLoggedOut";

const router = Router();

router.get('/', isLoggedOut, getLogin);
router.post('/', isLoggedOut, postLogin);

export default router;