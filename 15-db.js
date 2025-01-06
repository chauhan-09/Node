const mongoose = require('mongoose');
require('dotenv').config();

//Define the mongodb connection url
//const mongoURL = process.env.Mongodb_url_Local; //for local db
const mongoURL = process.env.Mongodb_url_Online //online cluster

mongoose.connect(mongoURL, {});

//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//event listners
db.on('connected', () => {
    console.log('connected to mongodb server');
})

db.on('disconnected', () => {
    console.log('disconnected from monogdb')
})

db.on('error', (err) => {
    console.log(err);
})

module.exports = db;

