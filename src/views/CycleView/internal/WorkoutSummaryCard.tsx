import React, { useEffect, useState } from 'react';
import { Workout, Exercise } from '../../../hooks/useGetWorkouts';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type Props = {
  workout: Workout;
};

export function WorkoutSummaryCard(props: Props) {
  const { workout } = props;
  return (
    <Card>
      <Typography variant="h5">{`Week ${workout.week}, Day ${workout.day}`}</Typography>
      <Typography>
        {'Main Lifts: '}
        {extractExerciseNames(workout.exercises)}
      </Typography>
    </Card>
  );
}

function extractExerciseNames(exercises: Exercise[]) {
  console.log('exercises', exercises);
  return exercises.map((exercise, i) => {
    return i < exercises.length - 1
      ? `${exercise.exercise}, `
      : exercise.exercise;
  });
}
