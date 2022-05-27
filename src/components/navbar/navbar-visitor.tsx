import React from 'react';
import {
  AppBar, Container, Toolbar,
} from '@mui/material';
import NavbarScrollLink from './navbar-scroll-link';

const NavbarVisitor: React.FC = () => (
  <AppBar
    position="sticky"
    sx={{
      bgcolor: 'bakery.main', boxShadow: '0',
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
        <NavbarScrollLink smooth offset={-100} to="home">DMK</NavbarScrollLink>
        <NavbarScrollLink smooth offset={-100} to="assortment">Asortimentas</NavbarScrollLink>
        <NavbarScrollLink smooth offset={-100} to="about">Apie</NavbarScrollLink>
        <NavbarScrollLink smooth offset={-100} to="reviews">Atsiliepimai</NavbarScrollLink>
        <NavbarScrollLink smooth offset={-100} to="contacts">Kontaktai</NavbarScrollLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavbarVisitor;
