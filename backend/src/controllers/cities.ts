import {pool} from '../database/database';
import express, {json} from 'express';

// Controller funcktion to get all cities from the database
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

   // Controller funcktion to get  city  by its unique ID from the database
   async function city_by_id_controller(req: express.Request, res: express.Response) {
    try {
      const id = req.params.id;
      const query = 'SELECT citiesTable.cityId,citiesTable.cityName, citiesTable.cityCount FROM public.citiesTable where citiesTable.cityId = $1'
      const result = await pool.query(query,[id]);

      if(result.rows.length === 0){
        console.log('city does not exist');
        return res.status(401).json({message:'city does not exist'})
    }
      return res.status(200).json(result.rows);
    } catch (error) {
      console.log('Error during execution:', error.message );
      res.status(500).json({message: 'Server error'});
    }
  }

  export {all_cities_controller,city_by_id_controller}