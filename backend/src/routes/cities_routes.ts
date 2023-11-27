import express from 'express';
//import {correct_token} from "../middleware/authorization.js"
import {all_cities_controller} from "../controllers/cities"


const router = express.Router();

/* GET All cities */
router.get('/',  all_cities_controller );



  export default router;