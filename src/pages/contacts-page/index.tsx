import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Typography, Container, Box, TextField, Button, Paper,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SectionTitle from '../../components/sectiontitle';

type ContactFormValues = {
  name: string,
  email: string,
  message: string
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Vardas turi būti iki 15 simbolių')
    .required('Šis laukas privalomas'),
  email: Yup.string()
    .email('Neteisingas el. pašto formatas')
    .required('Šis laukas privalomas'),
  message: Yup.string()
    .max(200, 'Žinutė turi būti iki 200 simbolių')
    .required('Šis laukas privalomas'),
});

const ContactsPage: React.FC = () => {
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container id="contacts" sx={{ mb: 5, height: '100vh' }}>
      <SectionTitle title="Kontaktai" description="Susisiekite su mumis" />
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
          width: 500,
        }}
        onSubmit={formik.handleSubmit}
      >
        <ContactMailIcon color="primary" sx={{ fontSize: 45 }} />
        <Box sx={{
          display: 'flex',
          width: 1 / 1,
          my: 2,
          justifyContent: 'center',
        }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              sx={{ mb: 1, mr: 2 }}
              id="name"
              label="Jūsų vardas"
              variant="outlined"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Typography sx={{ my: 0, fontSize: 12, color: 'red' }}>
                {formik.errors.name}
              </Typography>
            ) : <Box sx={{ my: '9px' }} />}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              sx={{ mb: 1 }}
              id="email"
              label="El. paštas"
              variant="outlined"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Typography sx={{ my: 0, fontSize: 12, color: 'red' }}>
                {formik.errors.email}
              </Typography>
            ) : <Box sx={{ my: '9px' }} />}
          </Box>
        </Box>
        <Box>
          <TextField
            sx={{ width: '435px', mt: 1 }}
            id="message"
            label="Žinutė"
            variant="outlined"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <Typography sx={{ mt: 1, fontSize: 12, color: 'red' }}>
              {formik.errors.message}
            </Typography>
          ) : <Box sx={{ my: '26px' }} />}
        </Box>
        <Box>
          <Button variant="contained" size="large" type="submit" sx={{ boxShadow: '0', mt: 2 }}>Siųsti</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactsPage;
