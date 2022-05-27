import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box, Button, Paper, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Item } from 'types';

type ItemCardProps = Omit<Item, 'id'>;

const ItemCard: React.FC<ItemCardProps> = ({
  title, description, price, img, weight, composition,
}) => (
  <Paper
    elevation={0}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 307,
      width: 300,
      textAlign: 'center',
      pb: 1,
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <Box
          component="img"
          src={img}
          alt={title}
          sx={{ height: 200, width: 300 }}
        />

        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ px: 2, fontSize: 12 }}>
          {description}
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: 'flex', margin: '0 auto' }}>
          <Typography sx={{ color: 'black' }}>
            {price}
            {' '}
            €
          </Typography>
          <Typography sx={{ color: 'text.secondary', textTransform: 'lowercase' }}>
            (
            {weight}
            kg)
          </Typography>

        </Box>

      </Box>

    </Box>
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Sudedamosios dalys</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {composition}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Paper>
);

export default ItemCard;
