import express, {json} from 'express';
import dotenv from 'dotenv';
import citiessRouter from './routes/cities_routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5003;
app.use(json());


// Enable CORS middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use('/api/cities', citiessRouter);
  app.use('/api/cities', citiessRouter);

  app.listen(PORT, ()=> {
    console.log(`Server is listening on port:${PORT}`);
  })