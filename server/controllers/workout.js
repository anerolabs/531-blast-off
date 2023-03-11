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
      exercise: 'Squat',
      group: 'Main',
      sets: 1,
      reps: 1,
    },
    {
      exercise: 'Bench Press',
      group: 'Main',
      sets: 1,
      reps: 1,
    },
    {
      exercise: 'Squat',
      group: 'Supplemental',
      sets: 1,
      reps: 1,
    },
    {
      exercise: 'Bench Press',
      group: 'Supplemental',
      sets: 1,
      reps: 1,
    },
    {
      exercise: 'Dips',
      group: 'Assistance',
      sets: 5,
      reps: 10,
    },
    {
      exercise: 'Curls',
      group: 'Supplemental',
      sets: 5,
      reps: 10,
    },
    {
      exercise: 'Back Extension',
      group: 'Supplemental',
      sets: 3,
      reps: 15,
    },
    {
      exercise: 'Situp',
      group: 'Supplemental',
      sets: 3,
      reps: 10,
    },
  ],
};
