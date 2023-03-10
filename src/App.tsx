import React from 'react';

import Box from '@mui/material/Box';
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import { ViewContainer } from './components/viewcontainer/ViewContainer';

import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Alert />
      <Box id="root-container" height="100vh" width="100vw" margin="auto">
        <Box
          id="app-shell"
          height="100vh"
          width="80vw"
          margin="auto"
          display="flex"
          flexDirection="column"
          rowGap={2}
          sx={{
            padding: 2,
          }}
        >
          <Header onLogoClickRoute="/" />

          <ViewContainer>
            <Outlet />
          </ViewContainer>
        </Box>
      </Box>
    </>
  );
}
