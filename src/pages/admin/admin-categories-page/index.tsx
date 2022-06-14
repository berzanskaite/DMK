import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import SectionTitle from 'components/sectiontitle';
import { Category } from 'types';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get<Category[]>('http://localhost:8000/categories')
      .then(({ data }) => setCategories(data))
      .catch(console.error);
  }, []);
  return (
    <Container id="reviews" sx={{ mb: 5, height: '100vh' }}>
      <SectionTitle title="Kategorijos" description="Kategorijų tvarkymo puslapis" />
      {categories.map((cat) => (<div key={cat.id}>{cat.title}</div>))}
    </Container>
  );
};
export default CategoriesPage;
