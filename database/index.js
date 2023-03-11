const mongoose = require('mongoose');
const username = require('./db-creds.secret').username;
const password = require('./db-creds.secret').password;

const cluster = 'cluster0.blhifsj';
const mongoURI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/531?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db.then((db) => console.log(`Connected to mongodb! ${cluster}`)).catch(
  (err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  }
);

module.exports = db;
