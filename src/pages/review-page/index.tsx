import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../../components/sectiontitle';

const OrdersPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <SectionTitle title="Atsiliepimai" description="Klientų atsiliepimai apie kepyklą ir kepinius" />

  </Container>
);

export default OrdersPage;
