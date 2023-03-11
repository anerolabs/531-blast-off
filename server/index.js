const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../database');

const cors = require('cors');
const corsOptions = require('./app-settings').cors;

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/../build'));
app.use(express.json());

const getWorkouts = require('./controllers/workout.js').getWorkouts;
const addWorkouts = require('./controllers/workout.js').addWorkout;

app.get('/workouts', (req, res) => {
  getWorkouts(req, res);
});

app.post('/add-workout', (req, res) => {
  addWorkouts(req, res);
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../build/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
