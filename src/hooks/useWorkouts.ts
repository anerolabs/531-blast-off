import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetWorkouts, Workout } from './useGetWorkouts';

export function useWorkouts() {
  const [workouts, setWorkouts] = useState([] as Workout[]);
  const { data, isLoading } = useQuery(['workouts'], useGetWorkouts);

  console.log('data', data);
  useEffect(() => {
    if (data && workouts.length === 0) {
      setWorkouts(data);
    }
  }, [data]);

  return { workouts, isLoading };
}
