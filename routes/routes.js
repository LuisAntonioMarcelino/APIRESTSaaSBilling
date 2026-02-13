import { Router } from "express";
import {
  getuser,
  register,
  login,
  upgradeplan,
  deleteAccount,
  getResources,
} from "../controller/controller.js";

const router = Router();

router.get("/getData", getuser);
router.post("/login", login);
router.get("/register", register);
router.get("/upgradeplan", upgradeplan);
router.delete("/acount", deleteAccount);
router.get("/getresources", getResources);

export default router;
