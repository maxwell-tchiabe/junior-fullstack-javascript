import {pool} from '../database/database';
import express, {json} from 'express';

// Controller funcktion to get all appointments from the database
async function all_cities_controller(req: express.Request, res: express.Response) {
    try {
      const query = 'SELECT cityId, cityName, cityCount FROM public.citiesTable'
      const result = await pool.query(query);
      return res.status(200).json( result.rows);
    } catch (error) {
      console.log('Error during execution:', error.message );
      return res.status(500).json({message: 'Server error'});
    }
  }
  export {all_cities_controller}