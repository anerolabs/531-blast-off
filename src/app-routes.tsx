import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import {
  CreateProgramView,
  CycleView,
  ErrorView,
  HomeView,
  ProgramView,
} from './views';

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
      {
        path: '/my/workout',
        element: <CycleView />,
      },
      {
        path: '/my/programs',
        element: <ProgramView />,
      },
      {
        path: '/my/programs/create',
        element: <CreateProgramView />,
      },
    ],
  },
]);
