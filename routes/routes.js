import { Router } from "express";
import {
  login,
  register,
  upgradeplan,
  deleteAccount,
} from "../controller/controller.js";

const router = Router();

router.get("/login", login);
router.get("/register", register);
router.get("/upgradeplan", upgradeplan);
router.delete("/acount", deleteAccount);

export default router;
