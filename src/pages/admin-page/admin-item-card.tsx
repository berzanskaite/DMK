import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Item } from '../../store/types';

type ItemCardProps = Item & {
  updateItem: (itemId: string) => void,
  deleteItem: (itemId: string) => void,
};

const AdminItemCard: React.FC<ItemCardProps> = ({
  id, title, description, price, img, weight, updateItem, deleteItem,
}) => (
  <Card sx={{ height: 345, width: 320, textAlign: 'center' }}>
    <CardMedia
      component="img"
      height="200"
      image={img}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
      <CardActions>
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
      </CardActions>
    </Box>
  </Card>
);

export default AdminItemCard;
