import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetWorkouts() {
  return useQuery<Workout[]>(['/workouts'], fetchWorkouts);
}

function fetchWorkouts() {
  return axios.get('http://localhost:3000/workouts').then((res) => res.data);
}

export type Workout = {
  id: number;
  programId: number;
  cycle: number;
  week: number;
  day: number;
  exercises: Exercise[];
};

export type Exercise = {
  name: string;
  group: string;
  sets: number;
  reps: number;
};
