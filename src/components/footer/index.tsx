import {
  Container, Grid, Box, Link,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => (
  <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="manoSpalva.main" color="white">
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>Help</Box>
          <Box>
            <ScrollLink to="home">Home</ScrollLink>
          </Box>
          <Box>
            <ScrollLink to="orders">Uzsakymai</ScrollLink>
          </Box>
          <Box>
            <ScrollLink to="reviews">Atsiliepimai</ScrollLink>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>Account</Box>
          <Box>
            <Link href="/admin">Admin</Link>
          </Box>
          <Box>
            <Link href="/auth/register">Registruotis</Link>
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
        DMK &copy;
        {' '}
        {new Date().getFullYear()}
      </Box>
    </Container>
  </Box>
);

export default Footer;
