import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './footer';
import NavbarAuth from './navbar/navbar-auth';

const PageLayoutAuth: React.FC = () => (
  <>
    <NavbarAuth />
    <Box component="main">
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default PageLayoutAuth;
