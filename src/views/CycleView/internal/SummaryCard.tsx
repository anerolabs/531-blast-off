import React, { useMemo } from 'react';
import { Workout, Exercise } from '../../../hooks/useGetWorkouts';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type Props = {
  workout: Workout;
};

type SortedExercises = {
  [group: string]: {
    summary: string;
    exercises: Exercise[];
  };
};

export function SummaryCard(props: Props) {
  const { workout } = props;
  const exercisesByGroup = useMemo(
    () => sortExerciseList(workout.exercises),
    [workout.exercises]
  );

  return (
    <Card>
      <Typography variant="h5">{`Week ${workout.week}, Day ${workout.day}`}</Typography>
      {Object.keys(exercisesByGroup).map((groupKey) => {
        return (
          <Typography
            key={groupKey}
          >{`${groupKey}: ${exercisesByGroup[groupKey].summary}`}</Typography>
        );
      })}
    </Card>
  );
}

function sortExerciseList(exercises: Exercise[]) {
  const sorted: SortedExercises = {};
  exercises.forEach((exercise) => {
    const { group, name } = exercise;
    if (!sorted[group]) sorted[group] = { summary: '', exercises: [] };
    sorted[group].summary = sorted[group].summary.concat(
      sorted[group].summary ? `, ${name}` : name
    );
    sorted[group].exercises = sorted[group].exercises.concat(exercise);
  });
  return sorted;
}
