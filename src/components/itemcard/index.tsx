import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box, Button, IconButton, Paper, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Item } from 'types';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type ItemCardProps = Item & {
  deleteItem: (itemId: string) => void,
};

const ItemCard: React.FC<ItemCardProps> = ({
  id, title, description, price, img, weight, composition, deleteItem,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  return (
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
          {img && (
            <Box
              component="img"
              src={img}
              alt={title}
              sx={{ height: 200, width: 300 }}
            />
          )}
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ px: 2, fontSize: 12 }}>
            {description}
          </Typography>
        </Box>

        <Box>
          <Box sx={{ display: 'flex', margin: '0 auto', alignItems: 'center' }}>
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
            {(location.pathname === '/admin')
              && (
                <>
                  <IconButton>
                    <DeleteIcon onClick={() => deleteItem(id)} />
                  </IconButton>
                  <IconButton>
                    <EditIcon onClick={() => navigate(`/admin/change-item/${id}`)} />
                  </IconButton>
                </>
              )}
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
};
export default ItemCard;
