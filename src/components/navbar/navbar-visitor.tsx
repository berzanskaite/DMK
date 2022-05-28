import React from 'react';
import {
  AppBar, Container, IconButton, Toolbar,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { authLogoutAction } from 'store/action-creators';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { useRootDispatch, useRootSelector } from 'store/hooks';
import { selectLoggedIn } from 'store/selectors';
import NavbarScrollLink from './navbar-scroll-link';
import NavbarLink from './navbar-link';

const NavbarVisitor: React.FC = () => {
  const location = useLocation();
  const dispatch = useRootDispatch();
  const loggedIn = useRootSelector(selectLoggedIn);
  return (
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
        {
          (location.pathname !== '/')
            ? (
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavbarLink to="/">DMK</NavbarLink>
                {loggedIn
                  && <IconButton onClick={() => dispatch(authLogoutAction)}><MeetingRoomIcon sx={{ color: 'white' }} /></IconButton>}
              </Toolbar>
            )
            : (
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavbarScrollLink smooth offset={-100} to="home">DMK</NavbarScrollLink>
                <NavbarScrollLink smooth offset={-100} to="assortment">Asortimentas</NavbarScrollLink>
                <NavbarScrollLink smooth offset={-100} to="about">Apie</NavbarScrollLink>
                <NavbarScrollLink smooth offset={-100} to="reviews">Atsiliepimai</NavbarScrollLink>
                <NavbarScrollLink smooth offset={-100} to="contacts">Kontaktai</NavbarScrollLink>
              </Toolbar>
            )
        }
      </Container>
    </AppBar>
  );
};
export default NavbarVisitor;
