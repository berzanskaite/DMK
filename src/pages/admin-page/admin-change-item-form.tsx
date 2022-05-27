import React from 'react';
import {
  Box, Container, TextField, Typography, Paper, Button, CircularProgress,
} from '@mui/material';
import SectionTitle from 'components/sectiontitle';
import EditIcon from '@mui/icons-material/Edit';

const AdminChangeItemForm: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <SectionTitle title="Redaguoti produktą" description="{title}" />
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
    // onSubmit={ }
    >
      <EditIcon color="primary" sx={{ fontSize: 45 }} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: 1 / 1,
        my: 2,
      }}
      >
        <TextField
          name="id"
          type="text"
          label="Produkto ID"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        />
        <TextField
          name="title"
          type="text"
          label="Pavadinimas"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        // value={ }
        // onChange={ }
        // onBlur={ }
        // error={ }
        // helperText={ }
        // disabled={ }
        />
        <TextField
          name="description"
          type="text"
          label="Aprašymas"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        // value={ }
        // onChange={ }
        // onBlur={ }
        // error={ }
        // helperText={ }
        // disabled={ }
        />
        <TextField
          name="price"
          type="number"
          label="Kaina, €"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        />
        <TextField
          name="weight"
          type="number"
          label="Svoris, kg"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        />
        <TextField
          name="composition"
          type="text"
          label="Sudedamosios dalys"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        />
        <TextField
          name="img"
          type="file"
          fullWidth
          inputProps={{ autocomplete: 'off' }}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        type="submit"
        // disabled={ }
        sx={{ width: '120px' }}
      >
        {/* {loading ? <CircularProgress size="26px" /> :  */}
        Redaguoti
      </Button>
    </Paper>
  </Container>
);

export default AdminChangeItemForm;
