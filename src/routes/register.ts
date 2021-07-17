import { Router } from "express";
import { getRegister, postRegister } from "../controllers/register";
import { isLoggedOut } from "../middleware/isLoggedOut";

const router = Router();

router.get('/', isLoggedOut, getRegister);
router.post('/', isLoggedOut, postRegister);

export default router;