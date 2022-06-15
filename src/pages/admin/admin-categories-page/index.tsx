import React, { useEffect } from 'react';
import {
  Button, Container, Typography, TextField, Paper, Box,
} from '@mui/material';

import { useFormik, FormikConfig } from 'formik';
import SectionTitle from 'components/sectiontitle';
import { useRootSelector } from 'store';
import { selectCategories, selectCategoriesLoading } from 'store/selectors';
import { CreateCategory } from 'types';
import * as Yup from 'yup';
import { useRootDispatch } from '../../../store/hooks';
import {
  categoriesFetchCategoriesAction,
  createCategoriesCreateNewCategoryAction,
  createCategoriesDeleteCategoryAction,
  createCategoriesUpdateCategoryAction,
} from '../../../store/features/categories/action-creators';
import CategoryListItem from './category-list-item';

type CreateCategoryFormikConfig = FormikConfig<CreateCategory>;

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Privalomas laukas'),
});

const CategoriesPage: React.FC = () => {
  const categories = useRootSelector(selectCategories);
  // const category = useRootSelector(selectCategoryById(id))
  const categoriesLoading = useRootSelector(selectCategoriesLoading);
  const dispatch = useRootDispatch();

  const initialValues = {
    title: '',
  };

  const handleSubmitForm: CreateCategoryFormikConfig['onSubmit'] = (category) => {
    const createAction = createCategoriesCreateNewCategoryAction(category);
    dispatch(createAction);
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<CreateCategory>({
    initialValues,
    onSubmit: handleSubmitForm,
    validationSchema,
  });

  useEffect(() => {
    dispatch(categoriesFetchCategoriesAction);
  }, []);

  let content = (
    <Container sx={{ my: 5, textAlign: 'center' }}>Kategorijos kraunasi...</Container>
  );

  if (!categoriesLoading) {
    if (categories.length > 0) {
      content = (
        <Container sx={{ width: '500px' }}>
          {categories.map((categoryProps) => (
            <CategoryListItem
              key={categoryProps.id}
              {...categoryProps}
              deleteCategory={() => dispatch(createCategoriesDeleteCategoryAction(categoryProps.id))}
              updateCategory={(id, title) => {
                dispatch(createCategoriesUpdateCategoryAction({ id, title }));
                console.log(title);
              }}
            // updateCategory={() => dispatch(createCategoriesUpdateCategoryAction())}
            />
          ))}
        </Container>
      );
    } else if (categories.length === 0) {
      content = <Typography>Kategorijų nėra</Typography>;
    }
  }

  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', mb: 5,
    }}
    >
      <SectionTitle title="Kategorijos" description="Kategorijų tvarkymo puslapis" />
      {content}

      <SectionTitle title="Kurti naują kategoriją" description="" />
      <Box
        component="form"
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
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          sx={{ width: '120px' }}
        >
          Sukurti
        </Button>
      </Box>
      <Button href="/admin">Grįžti į administratoriaus puslapį</Button>
    </Container>
  );
};
export default CategoriesPage;

/*
Liko padaryti:

padaryti kategoriju redagavima changeItem formoje
padaryti,kad nebutu galima redaguoti kategorijos i tuscia pavadinima

*/
