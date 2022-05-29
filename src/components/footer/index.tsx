import React from 'react';
import {
  Container, Grid, Box,
} from '@mui/material';
import FooterScrollLink from './footer-scroll-link';
import FooterLink from './footer-link';

const Footer: React.FC = () => (
  <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="bakery.main" color="white">
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>DMK</Box>
          <Box>
            <FooterScrollLink smooth offset={-90} to="home">Pagrindinis</FooterScrollLink>
          </Box>
          <Box>
            <FooterScrollLink smooth offset={-90} to="orders">Užsakymai</FooterScrollLink>
          </Box>
          <Box>
            <FooterScrollLink smooth offset={-90} to="about">Apie</FooterScrollLink>
          </Box>
          <Box>
            <FooterScrollLink smooth offset={-90} to="reviews">Atsiliepimai</FooterScrollLink>
          </Box>
          <Box>
            <FooterScrollLink smooth offset={-90} to="contacts">Kontaktai</FooterScrollLink>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>TVS</Box>
          <Box>
            <FooterLink to="/admin">Administratoriaus puslapis</FooterLink>
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
