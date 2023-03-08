import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { ErrorView, HomeView } from './views';
import { UpcomingWorkoutsView } from './views/UpcomingWorkouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
    ],
  },
]);