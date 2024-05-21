// // offerRoutes.js
import express from "express";
const router = express.Router();

import {
  getAllOffers,
  getOfferById,

} from "../controllers/offerController.js";

// GET all offers
router.get("/",getAllOffers);
// GET offer by ID
router.get("/:id" ,getOfferById);



export default router;
