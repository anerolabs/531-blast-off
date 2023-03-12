const db = require('../index.js');
const Workout = require('../../database/models/workout.js');

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find().exec();
      res.send(workouts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addWorkout: async (req, res) => {
    const result = await Workout.create(mock);

    if (!result) {
      console.log('Could not write to the database.');
      res.status(500).send(error);
    } else {
      res.status(200).send(`Added to the database! ${res}`);
    }
  },
};

const mock = {
  programId: 1,
  cycle: 1,
  week: 1,
  day: 1,
  exercises: [
    {
      name: 'Squat',
      group: 'Main',
      sets: 1,
      reps: 1,
    },
    {
      name: 'Bench Press',
      group: 'Main',
      sets: 1,
      reps: 1,
    },
    {
      name: 'Squat',
      group: 'Supplemental',
      sets: 1,
      reps: 1,
    },
    {
      name: 'Bench Press',
      group: 'Supplemental',
      sets: 1,
      reps: 1,
    },
    {
      name: 'Dips',
      group: 'Assistance',
      sets: 5,
      reps: 10,
    },
    {
      name: 'Curls',
      group: 'Assistance',
      sets: 5,
      reps: 10,
    },
    {
      name: 'Back Extension',
      group: 'Assistance',
      sets: 3,
      reps: 15,
    },
    {
      name: 'Situp',
      group: 'Assistance',
      sets: 3,
      reps: 10,
    },
  ],
};
