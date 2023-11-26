import express, {json} from 'express';


const app = express();
const PORT = process.env.PORT || 5001;
app.use(json());


// Enable CORS middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.listen(PORT, ()=> {
    console.log(`Server is listening on port:${PORT}`);
  })