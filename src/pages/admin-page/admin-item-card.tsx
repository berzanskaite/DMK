import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { Item } from '../../types';

type ItemCardProps = Item & {
  updateItem: (itemId: string) => void,
  deleteItem: (itemId: string) => void,
};

const AdminItemCard: React.FC<ItemCardProps> = ({
  id, title, description, price, img, weight, updateItem, deleteItem,
}) => (
  <Paper
    elevation={2}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 360,
      width: 345,
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
          sx={{ height: 240, width: 345 }}
        />
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
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
          <Button size="small" onClick={() => updateItem(id)}>Redaguoti</Button>
          <Button size="small" onClick={() => deleteItem(id)}>Ištrinti</Button>
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default AdminItemCard;
