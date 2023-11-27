import pg from 'pg';
const { Pool } = pg;

//  setting up a connection to a PostgreSQL database using the pg-library.
let local_pool_config = {
  user: 'postgres',
  password: 'pumaloma//1009',
  host: 'localhost',
  port: 5432,
  database: 'FirstData'
};
const pool = new Pool(local_pool_config);
export {pool};