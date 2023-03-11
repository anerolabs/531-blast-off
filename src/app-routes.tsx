import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { ErrorView, HomeView, CycleView } from './views';

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
        path: '/cycle',
        element: <CycleView />,
      },
    ],
  },
]);
