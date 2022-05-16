import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './navbar';

const PageLayout: React.FC = () => (
  <>
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
  </>
);

export default PageLayout;
