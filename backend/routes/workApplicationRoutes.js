import express from "express"

const router = express.Router();
import {getWorkApplicationById,createWorkApplication,deleteWorkApplication} from '../controllers/workApplicationController.js'
import {  validateWorkApplyed } from "../middlewares/validation.js";
import { verifyToken, verifyWorker, verifyuser } from "../middlewares/authenticateToken.js";



// GET work application by ID
router.get('/userAppecltion/:id',verifyuser,getWorkApplicationById);

// POST create a new work application
router.post('/',verifyToken,validateWorkApplyed,createWorkApplication);

// DELETE delete a work application
router.delete('/:id',verifyWorker,deleteWorkApplication);

export default  router;