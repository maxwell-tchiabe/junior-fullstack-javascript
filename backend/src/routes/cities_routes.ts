import express from 'express';
//import {correct_token} from "../middleware/authorization.js"
import {all_cities_controller, city_by_id_controller,create_city_controller,delete_city_controller,update_city_controller} from "../controllers/cities"


const router = express.Router();

/* GET All cities */
router.get('/',  all_cities_controller );


/* GET  city by Id */
router.get('/:id', city_by_id_controller );

/* create city */

router.post('/', create_city_controller );

/* DELETE  city by Id */
router.delete('/:id',delete_city_controller );


/* update  city by Id */
router.put('/:id',  update_city_controller );

  export default router;