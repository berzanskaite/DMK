import React, { useEffect, useState } from 'react';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';
import {
  Box, Container, TextField, Typography, Paper, Button, CircularProgress,
} from '@mui/material';
import SectionTitle from 'components/sectiontitle';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import { useRootDispatch, useRootSelector } from 'store/hooks';
import { selectItemById, selectItems, selectItemsLoading } from 'store/selectors';
import { Item } from 'types';
import { createItemsUpdateItemAction, itemsFetchItemsAction } from 'store/action-creators';

type ChangeItemFormikConfig = FormikConfig<Item>;

const validationSchema = Yup.object({
  id: Yup.string()
    .required('Privalomas laukas')
    .min(5, 'Mažiausiai 5 simboliai'),
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

  const isLoading = useRootSelector(selectItemsLoading);
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

  // console.log('itemd: ', itemId, item);

  const handleSubmitForm: ChangeItemFormikConfig['onSubmit'] = (values) => {
    const changeAction = createItemsUpdateItemAction(values);
    dispatch(changeAction);
    navigate('/admin');
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
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
    if (!isLoading && !hasPrefilled) {
      if (item) { setValues(item); }
      setHasPrefilled(true);
    }
  }, [isLoading, item]);

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
            onChange={handleChange}
          />
          <TextField
            name="title"
            type="text"
            label="Pavadinimas"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.title}
            onChange={handleChange}
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
            value={values.description}
            onChange={handleChange}
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
            value={values.price}
            onChange={handleChange}
          />
          <TextField
            name="weight"
            type="number"
            label="Svoris, kg"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.weight}
            onChange={handleChange}
          />
          <TextField
            name="composition"
            type="text"
            label="Sudedamosios dalys"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.composition}
            onChange={handleChange}
          />
          <TextField
            name="img"
            type="text"
            fullWidth
            inputProps={{ autoComplete: 'off' }}
            value={values.img}
            onChange={handleChange}
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
