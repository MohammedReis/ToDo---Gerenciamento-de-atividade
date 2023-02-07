const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.URL_MONGODB

mongoose.set('strictQuery', false);

mongoose.connect(url,{useNewUrlParser:true});

module.exports = mongoose;