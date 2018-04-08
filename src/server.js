import bodyParser from 'body-parser';
import express from 'express';
// import { MongoClient } from 'mongodb';
import routes from './routes';

const app = express();
const port = process.env.port || 1337;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app, {});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
