import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container, Paper, Box, Button, TextField, Alert,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SectionTitle from '../components/sectiontitle';
import AuthContext from '../features/auth/auth-context';

const RegisterPage: React.FC = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const { error, clearError } = useContext(AuthContext);

  const handleRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    register({ email, password, repeatPassword });
  };

  return (
    <Container sx={{ my: 5 }}>
      <SectionTitle title="Registracija" description="" />
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              mt: 3,
            }}
            color="error"
            onClose={clearError}
          >
            {error}
          </Alert>
        </Box>
      )}
      <Paper
        component="form"
        elevation={3}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          p: 3,
          width: 400,
        }}
        onSubmit={handleRegister}
      >
        <VpnKeyIcon color="primary" sx={{ fontSize: 45 }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 1 / 1,
          my: 2,
        }}
        >
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="Repeat password"
            fullWidth
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" size="large" type="submit">Registruotis</Button>
      </Paper>

    </Container>
  );
};

export default RegisterPage;
