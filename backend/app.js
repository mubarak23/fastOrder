//mongodb connection :mongodb+srv://hela:<password>@cluster0-lqg8h.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const Recipe = require('./models/recipe');
const bodyParser = require('body-parser');



//cnx to the db
mongoose.connect('mongodb+srv://hela:Hela0000@cluster0-lqg8h.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use(bodyParser.json());
  
  
// CORS error
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

 
  
 


module.exports = app;