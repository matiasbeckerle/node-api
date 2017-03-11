import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('Node API');
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started. Listening on port: ${port}.`);
});
