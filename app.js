const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const tagRoutes = require('./routes/api-tag-routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.listen(process.env.PORT || 5000, (err) => {
  if (err) return console.log(err);
  console.log(`server listen on ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) return console.log(err);
  console.log(`connect to MongoDB successfully!`);
});

app.use('/api', tagRoutes);
