const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');
const app = express();

//Middleware
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDb connected..'))
    .catch(err => console.log(err));

 //user Routes
 app.use('/api/items', items);

app.listen(5000 , () => console.log('Server started on port 5000')); 