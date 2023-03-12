import React, { useEffect, useState } from 'react';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';

import { ViewHeader } from '../../components/viewheader/ViewHeader';
import { SummaryCard } from './internal/SummaryCard';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';

export function CycleView() {
  const { data: workouts, isLoading } = useGetWorkouts();

  return (
    <>
      <ViewHeader title="Current Cycle" />
      {workouts &&
        workouts.map((workout) => {
          return (
            <SummaryCard
              key={`workout-${workout.cycle}-${workout.week}-${workout.day}`}
              workout={workout}
            />
          );
        })}
    </>
  );
}

// const columns: GridColDef[] = [
//   {
//     field: 'invoiceId',
//     headerName: 'Invoice #',
//     renderCell: (cell) => {
//       const id = cell.id;
//       return <Link to={`./${id}`}>{id}</Link>;
//     },
//   },
//   { field: 'formId', headerName: 'Google form id' },
//   { field: 'orderPlaced', headerName: 'Order placed' },
//   { field: 'lastName', headerName: 'Last name' },
//   { field: 'firstName', headerName: 'First name' },
//   { field: 'email', headerName: 'Customer email' },
//   { field: 'phone', headerName: 'Customer phone' },
//   { field: 'pickupTime', headerName: 'Pick up date' },
//   { field: 'subtotal', headerName: 'Subtotal' },
//   { field: 'salesTax', headerName: 'Sales Tax' },
//   { field: 'total', headerName: 'Total' },
//   { field: 'sent', headerName: 'Invoice Sent' },
//   { field: 'paid', headerName: 'Invoice Paid' },
// ];
