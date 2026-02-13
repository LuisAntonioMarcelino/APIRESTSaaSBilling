import { Router } from "express";
import {
  getuser,
  register,
  upgradeplan,
  deleteAccount,
} from "../controller/controller.js";

const router = Router();

router.get("/login", getuser);
router.get("/register", register);
router.get("/upgradeplan", upgradeplan);
router.delete("/acount", deleteAccount);

export default router;
