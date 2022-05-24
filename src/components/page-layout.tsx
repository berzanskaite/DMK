import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './footer';
import NavbarVisitor from './navbar/navbar-visitor';

const PageLayout: React.FC = () => (
  <>
    <NavbarVisitor />
    <Box component="main">
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default PageLayout;
