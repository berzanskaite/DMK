import React from 'react';
import {
  AppBar, Container, Toolbar,
} from '@mui/material';
import NavbarLink from './navbarlink';

const Navbar: React.FC = () => (
  <AppBar
    position="static"
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

        <NavbarLink to="/">DMK</NavbarLink>
        <NavbarLink to="/uzsakymai">Užsakymai</NavbarLink>
        <NavbarLink to="/apie">Apie</NavbarLink>
        <NavbarLink to="/atsiliepimai">Atsiliepimai</NavbarLink>
        <NavbarLink to="/kontaktai">Kontaktai</NavbarLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
