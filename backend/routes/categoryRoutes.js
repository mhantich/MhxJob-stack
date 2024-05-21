import express from "express";
import { verifyAdmin } from "../middlewares/authenticateToken.js";

const router = express.Router();
import {
  getAllCategories,
  
} from "../controllers/categoryController.js";


// GET all categories
router.get("/", getAllCategories);



export default router;
