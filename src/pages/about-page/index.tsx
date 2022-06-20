import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EggIcon from '@mui/icons-material/Egg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SectionTitle from '../../components/sectiontitle';

const AboutPage: React.FC = () => (
  <Container id="about" sx={{ mb: 5, height: '80vh' }}>
    <SectionTitle title="Apie" description="Kaip mes kepame ir kuo vadovaujamės" />
    <Container sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '40vh',
      flexWrap: 'wrap',
    }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <BakeryDiningIcon sx={{ fontSize: '60px', mr: '25px', color: 'bakery.main' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Skonis</Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray', width: '150px' }}>Išpuoselėti receptai ir išgirti skoniai</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EggIcon sx={{
          fontSize: '45px', mr: '18px', color: 'bakery.main',
        }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Šviežumas</Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray', width: '150px' }}>Švieži sezoniniai produktai ir dar kvepiantys kepiniai</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MenuBookIcon sx={{ fontSize: '45px', mr: '25px', color: 'bakery.main' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Kokybė</Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray', width: '150px' }}>Kvalifikuoti ir daug patirties turintys kepėjai</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalShippingIcon sx={{ fontSize: '45px', mr: '25px', color: 'bakery.main' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Pristatymas</Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray', width: '150px' }}>Greitas pristatymas</Typography>
        </Box>
      </Box>
    </Container>
  </Container>
);

export default AboutPage;
