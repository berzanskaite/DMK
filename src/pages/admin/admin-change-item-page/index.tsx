import React, { useEffect, useState } from 'react';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';
import {
  Box, Container, TextField, Paper, Button, CircularProgress,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import SectionTitle from 'components/sectiontitle';
import { useRootDispatch, useRootSelector } from 'store/hooks';
import { selectItemById, selectItemsLoading } from 'store/selectors';
import { createItemsUpdateItemAction, itemsFetchItemsAction } from 'store/action-creators';
import { Item } from 'types';
import pause from 'helpers/pause';

type ChangeItemFormikConfig = FormikConfig<Item>;

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Privalomas laukas'),
  description: Yup.string()
    .required('Privalomas laukas')
    .max(44, 'Daugiausiai 44 simboliai'),
  price: Yup.number()
    .required('Privalomas laukas')
    .positive('Turi būti teigiamas skaičius'),
  weight: Yup.number()
    .required('Privalomas laukas')
    .positive('Turi būti teigiamas skaičius'),
  composition: Yup.string()
    .required('Privalomas laukas')
    .min(30, 'Mažiausiai 30 simbolių'),
});

const AdminChangeItemPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useRootDispatch();

  const navigate = useNavigate();

  const loading = useRootSelector(selectItemsLoading);
  const item = useRootSelector(selectItemById(id));
  const [hasPrefilled, setHasPrefilled] = useState(!!item);

  const initialValues = item || {
    composition: '',
    description: '',
    id: '',
    img: '',
    price: 0,
    title: '',
    weight: 0,
  };

  const handleSubmitForm: ChangeItemFormikConfig['onSubmit'] = (values) => {
    const changeAction = createItemsUpdateItemAction(values);
    dispatch(changeAction);
    pause(2000);
    navigate('/admin');
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useFormik<Item>({
    initialValues,
    onSubmit: handleSubmitForm,
    validationSchema,
  });

  useEffect(() => {
    if (!loading && !hasPrefilled) {
      if (item) { setValues(item); }
      setHasPrefilled(true);
    }
  }, [loading, item]);

  useEffect(() => {
    dispatch(itemsFetchItemsAction);
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <SectionTitle title="Redaguoti produktą" description={values.title} />
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
        onSubmit={handleSubmit}
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
            value={values.id}
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            disabled
          />
          <TextField
            name="title"
            type="text"
            label="Pavadinimas"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            disabled={loading}
          />
          <TextField
            name="description"
            type="text"
            label="Aprašymas"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            disabled={loading}
          />
          <TextField
            name="price"
            type="number"
            label="Kaina, €"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.price && Boolean(errors.price)}
            helperText={touched.price && errors.price}
            disabled={loading}
          />
          <TextField
            name="weight"
            type="number"
            label="Svoris, kg"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.weight && Boolean(errors.weight)}
            helperText={touched.weight && errors.weight}
            disabled={loading}
          />
          <TextField
            name="composition"
            type="text"
            label="Sudedamosios dalys"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.composition}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.composition && Boolean(errors.composition)}
            helperText={touched.composition && errors.composition}
            disabled={loading}
          />
          <TextField
            name="img"
            type="text"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.img}
            onChange={handleChange}
            disabled={loading}

          />
        </Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          disabled={loading}
          sx={{ width: '120px' }}
        >
          {loading ? <CircularProgress size="26px" /> : 'Redaguoti'}
        </Button>
        <Button href="/admin">Grįžti į administratoriaus puslapį</Button>
      </Paper>
    </Container>
  );
};

export default AdminChangeItemPage;
