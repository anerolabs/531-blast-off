import { delay } from './utils';
import { useQuery } from '@tanstack/react-query';

export async function useGetWorkouts() {
  await delay(2000);
  return mockWorkouts;
}

const mockWorkouts: Workout[] = [
  {
    id: 1,
    cycle: 1,
    day: 1,
    lifts: {
      main: [
        {
          exercise: 'Squat',
        },
        {
          exercise: 'Bench Press',
        },
      ],
      supplemental: [
        {
          exercise: 'Squat',
        },
        {
          exercise: 'Bench Press',
        },
      ],
      assistance: [],
    },
  },
  {
    id: 2,
    cycle: 1,
    day: 2,
    lifts: {
      main: [
        {
          exercise: 'Deadlift',
        },
        {
          exercise: 'Overhead Press',
        },
      ],
      supplemental: [
        {
          exercise: 'Deadlift',
        },
        {
          exercise: 'Overhead Press',
        },
      ],
      assistance: [],
    },
  },
  {
    id: 2,
    cycle: 1,
    day: 3,
    lifts: {
      main: [
        {
          exercise: 'Bench Press',
        },
        {
          exercise: 'Squat',
        },
      ],
      supplemental: [
        {
          exercise: 'Bench Press',
        },
        {
          exercise: 'Squat',
        },
      ],
      assistance: [],
    },
  },
];

export type Workout = {
  id: number;
  cycle: number;
  day: number;
  lifts: {
    main: Exercise[];
    supplemental: Exercise[];
    assistance: Exercise[];
  };
};

type Exercise = {
  exercise: string;
};
