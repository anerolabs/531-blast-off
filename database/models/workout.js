const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  id: Number,
  programId: Number,
  cycle: Number,
  week: Number,
  day: Number,
  exercises: [
    {
      exercise: String,
      group: String,
      sets: Number,
      reps: Number,
      weight: Number,
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
