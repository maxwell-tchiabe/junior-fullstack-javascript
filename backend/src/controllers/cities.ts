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

   // Controller funcktion to create a new city  in the database
   async function create_city_controller(req: express.Request, res: express.Response) {
    try {
      const {cityName,cityCount} = req.body;
      const query = 'INSERT INTO public.citiesTable ( cityName,cityCount) VALUES ($1, $2) RETURNING *'
      const new_city = await pool.query(query, [cityName,cityCount]);
      return res.status(200).json({message: 'city created successfully'});
    } catch (error) {
        console.log('Error during execution:', error.message );
       return res.status(500).json({message: 'Server error'});
    }
  }

  // Controller funcktion to delete an city  from the database
  async function delete_city_controller(req: express.Request, res: express.Response) {
    try {
      const id = req.params.id;
      const query = 'SELECT citiesTable.cityId,citiesTable.cityName, citiesTable.cityCount FROM public.citiesTable where citiesTable.cityId = $1'
      const is_city = await pool.query(query,[id]);
      const delete_query = 'DELETE   FROM public.citiesTable WHERE citiesTable.cityId = $1'

      if(is_city.rows.length === 0){
        console.log('city does not exist');
        return res.status(401).json({message:'city does not exist'})
    }
      const result = await pool.query(delete_query,[id]);
      return res.status(200).json({message: 'delete successfully'});
    } catch (error) {
      console.log('Error during execution:', error.message );
      return res.status(500).json({message: 'Server error'});
    }
  }

  
  // Controller funcktion to update a city's information  in the database 
  async function update_city_controller(req: express.Request, res: express.Response) {
    try {
        
      const id = req.params.id;
      const {cityName,cityCount} = req.body;
      const query = 'SELECT citiesTable.cityId,citiesTable.cityName, citiesTable.cityCount FROM public.citiesTable where citiesTable.cityId = $1'
      const is_city = await pool.query(query,[id]);
      const update_query = 'UPDATE citiesTable SET cityName = $1,cityCount = $2 WHERE citiesTable.cityId = $3'

      if(is_city.rows.length === 0){
        console.log('city does not exist');
        return res.status(401).json({message:'city does not exist'})
    }

      const result = await pool.query(update_query,[cityName,cityCount,id]);
      return res.status(200).json({message: 'update successfully'});
    } catch (error) {
      console.log('Error during execution:', error.message );
      res.status(500).json({message: 'Server error'});
    }
  }

  export {all_cities_controller,city_by_id_controller,create_city_controller,delete_city_controller,update_city_controller}