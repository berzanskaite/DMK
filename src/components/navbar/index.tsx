import React from 'react';
import {
  AppBar, Container, Toolbar,
} from '@mui/material';
import NavbarScrollLink from './navbarlinkscroll';

const Navbar: React.FC = () => (
  <AppBar
    position="sticky"
    sx={{
      bgcolor: 'manoSpalva.main', boxShadow: '0',
    }}
  >
    <Container sx={{
      px: {
        xs: 0,
        sm: 0,
      },
    }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <NavbarScrollLink offset={-100} smooth to="home">DMK</NavbarScrollLink>
        <NavbarScrollLink offset={-100} smooth to="orders">Užsakymai</NavbarScrollLink>
        <NavbarScrollLink offset={-100} smooth to="about">Apie</NavbarScrollLink>
        <NavbarScrollLink offset={-100} smooth to="reviews">Atsiliepimai</NavbarScrollLink>
        <NavbarScrollLink offset={-100} smooth to="contacts">Kontaktai</NavbarScrollLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
