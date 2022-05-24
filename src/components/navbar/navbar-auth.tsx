import React from 'react';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { authLogoutAction } from 'store/action-creators';
import {
  AppBar, Container, Toolbar, IconButton,
} from '@mui/material';
import { useRootDispatch, useRootSelector } from 'store/hooks';
import { selectLoggedIn } from 'store/selectors';
import NavbarLink from './navbarlink';

const NavbarAuth: React.FC = () => {
  const dispatch = useRootDispatch();
  const loggedIn = useRootSelector(selectLoggedIn);
  return (
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
          <NavbarLink to="/">DMK</NavbarLink>
          {loggedIn
            && <IconButton onClick={() => dispatch(authLogoutAction)}><MeetingRoomIcon sx={{ color: 'white' }} /></IconButton>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarAuth;
