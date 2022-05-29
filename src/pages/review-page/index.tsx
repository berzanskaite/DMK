import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from 'components/sectiontitle';

const ReviewsPage: React.FC = () => (
  <Container id="reviews" sx={{ mb: 5, height: '100vh' }}>
    <SectionTitle title="Atsiliepimai" description="Klientų atsiliepimai apie kepyklą ir kepinius" />

  </Container>
);

export default ReviewsPage;
