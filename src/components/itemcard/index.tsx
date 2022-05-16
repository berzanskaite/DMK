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
import Item from '../../types/item';

type ItemCardProps = Omit<Item, 'id'>;

const ItemCard: React.FC<ItemCardProps> = ({
  title, description, price, img, weight,
}) => (
  <Card sx={{ height: 400, width: 345, textAlign: 'center' }}>
    <CardMedia
      component="img"
      height="240"
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
        <Button disableRipple sx={{ color: 'black' }}>
          {price}
          {' '}
          €
        </Button>
        <Button disabled sx={{ color: 'text.secondary', textTransform: 'lowercase' }}>
          (
          {weight}
          kg)
        </Button>
        <Button size="small">Sudėtis</Button>
        <Button size="small">Užsakyti</Button>
      </CardActions>
    </Box>
  </Card>
);

export default ItemCard;
