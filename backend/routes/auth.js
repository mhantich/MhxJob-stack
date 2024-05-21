
import express from "express"
import { validateRegistration, validatelogin } from '../middlewares/validation.js';

const router = express.Router()
import {checkAuth, loginController,logout,regesterController} from '../controllers/authController.js'
import { verifyToken } from "../middlewares/authenticateToken.js";
router.post("/login",validatelogin,loginController);
router.post("/regester",validateRegistration, regesterController);
router.get("/check-auth",verifyToken,checkAuth)
router.get("/logout",logout)
export default router
