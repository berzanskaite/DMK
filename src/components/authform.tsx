import React, { useContext } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from '../features/auth/auth-context';

type AuthFormProps = {
  btnActive?: boolean,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const AuthForm: React.FC<AuthFormProps> = ({
  btnActive = true,
  onSubmit,
  children,
}) => {
  const { error, clearError, loading } = useContext(AuthContext);

  return (
    <>
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
        onSubmit={onSubmit}
      >
        <VpnKeyIcon color="primary" sx={{ fontSize: 45 }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          width: 1 / 1,
          my: 2,
        }}
        >
          {children}
        </Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          disabled={!btnActive || loading}
          sx={{ width: '120px' }}
        >
          {loading ? <CircularProgress size="26px" /> : 'Prisijungti'}
        </Button>
        <Button href="/auth/register" variant="contained" size="small" type="submit">Registruotis</Button>
      </Paper>
    </>
  );
};

export default AuthForm;
