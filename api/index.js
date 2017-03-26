import express from 'express';
import bodyParser from 'body-parser';
import tracer from './middleware/tracer';
import errorHandler from './middleware/errorHandler';
import router from './router';

const port = process.env.PORT || 3000;
const app = express();

app.use(tracer);
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);

app.get('/', function (req, res) {
  res.send('Node API');
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started. Listening on port: ${port}.`);
});
