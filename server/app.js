const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT|| 5000;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.use('/recipes', require('./routes/recipes'));

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
  db.sync();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(PORT);