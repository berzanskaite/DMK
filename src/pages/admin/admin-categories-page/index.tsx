import React, { useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import SectionTitle from 'components/sectiontitle';
import { useRootSelector } from 'store';
import { selectCategories, selectCategoriesLoading } from 'store/selectors';
import { useRootDispatch } from '../../../store/hooks';
import { categoriesFetchCategoriesAction, createCategoriesDeleteCategoryAction } from '../../../store/features/categories/action-creators';
import CategoryListItem from './category-list-item';

const CategoriesPage: React.FC = () => {
  const categories = useRootSelector(selectCategories);
  const categoriesLoading = useRootSelector(selectCategoriesLoading);
  const dispatch = useRootDispatch();

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
            />
          ))}
        </Container>
      );
    } else if (categories.length === 0) {
      content = <Typography>Kategorijų nera</Typography>;
    }
  }

  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', mb: 5, height: '100vh',
    }}
    >
      <SectionTitle title="Kategorijos" description="Kategorijų tvarkymo puslapis" />
      {content}
      <Button href="/admin">Grįžti į administratoriaus puslapį</Button>
    </Container>
  );
};
export default CategoriesPage;

/*
Liko padaryti:
kad kategorijos issitrintu is saraso, ne tik is duombazes
kategoriju redagavimas, ne tik trynimas
nauju kategoriju ivedimas

kad sudejus kategorijas i createNewItem, jos isirasytu i duombaze(su Irma)
padaryti kategoriju redagavima changeItem formoje

*/
