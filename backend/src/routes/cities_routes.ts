import express from 'express';
//import {correct_token} from "../middleware/authorization.js"
import {all_cities_controller, city_by_id_controller} from "../controllers/cities"


const router = express.Router();

/* GET All cities */
router.get('/',  all_cities_controller );


/* GET  city by Id */
router.get('/:id', city_by_id_controller );

  export default router;