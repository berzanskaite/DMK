import React, { useEffect } from 'react';
import {
  Box, Container, TextField, Typography, Paper, Button, CircularProgress,
} from '@mui/material';
import SectionTitle from 'components/sectiontitle';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';

const AdminChangeItemPage: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Pirmas užkrovimas');
    /*
      Naudojant id gautą iš url parametrų, incijuokite atnaujinamo itemo duomenų parsiuntimą, siunčiant tam sukurtą action'ą.

      Tuomet parašykite elektorių, kuris imtų tuos duomenis, į kuriuos yra įrašomas atnauninamas item'as.

      GAutus duomenis nustatykite į Formik.initialValues;

      Aprašykite gerą Formik Validaciją, jog būtų siunčiamos geros reikšmės

      Pasubmitinus formą, atnaujintą objektą perduokite Redux'ui siounčiant Action, ir jį apdorojant įrašykite atnaujintus duomenis į JSOn-server
    */
  }, []);
  return (
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
            inputProps={{ autoComplete: 'off' }}
          />
          <TextField
            name="title"
            type="text"
            label="Pavadinimas"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
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
            inputProps={{ autoComplete: 'off' }}
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
            inputProps={{ autoComplete: 'off' }}
          />
          <TextField
            name="weight"
            type="number"
            label="Svoris, kg"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
          />
          <TextField
            name="composition"
            type="text"
            label="Sudedamosios dalys"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
          />
          <TextField
            name="img"
            type="file"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
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
};

export default AdminChangeItemPage;
