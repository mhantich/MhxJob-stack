// jobRoutes.js
import express from "express"
const router = express.Router();
import {getAllJobs} from '../controllers/jobController.js'
router.get('/',  getAllJobs);





export default  router;
