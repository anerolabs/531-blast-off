import React from 'react';
import { useGetWorkouts } from '../../../hooks/useGetWorkouts';

import { ViewHeader } from '../../../components/viewheader/ViewHeader';
import { Typography } from '@mui/material';

const programs: [] = [];

export function ProgramView() {
  const { data: workouts, isLoading } = useGetWorkouts();

  return (
    <>
      <ViewHeader
        title="Programs"
        action={{ label: 'Create program', route: 'create' }}
      />
      {programs.length === 0 ? (
        <Typography>You don't have any programs yet!</Typography>
      ) : (
        programs.map((program) => {
          return <></>;
        })
      )}
    </>
  );
}
