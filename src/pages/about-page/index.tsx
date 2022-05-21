import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../../components/sectiontitle';

const AboutPage: React.FC = () => (
  <Container id="about" sx={{ mb: 5, height: '100vh' }}>
    <SectionTitle title="Apie" description="Kaip mes kepame ir kuo vadovaujamės" />

  </Container>
);

export default AboutPage;
