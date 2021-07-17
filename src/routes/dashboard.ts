import { Router } from "express";
import { getDashboard } from "../controllers/dashboard";
import { isAuth } from '../middleware/isAuth';

const router = Router();

router.get('/', isAuth, getDashboard);

export default router;