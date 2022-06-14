import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import SectionTitle from 'components/sectiontitle';
import { useRootSelector } from 'store';
import { selectCategories } from 'store/selectors';
import { useRootDispatch } from '../../../store/hooks';
import { categoriesFetchCategoriesAction } from '../../../store/features/categories/action-creators';

const CategoriesPage: React.FC = () => {
  const categories = useRootSelector(selectCategories);
  const dispatch = useRootDispatch();
  useEffect(() => {
    dispatch(categoriesFetchCategoriesAction);
  }, []);

  return (
    <Container sx={{ mb: 5, height: '100vh' }}>
      <SectionTitle title="Kategorijos" description="Kategorijų tvarkymo puslapis" />
      {categories.map((cat) => (<div key={cat.id}>{cat.title}</div>))}
    </Container>
  );
};
export default CategoriesPage;
