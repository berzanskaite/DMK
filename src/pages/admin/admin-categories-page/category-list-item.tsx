import React from 'react';
import {
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import { Category } from 'types';

type CategoryListItemProps = Category & {
  deleteCategory: (categoryId: string) => void,
  updateCategory: (categoryId: string) => void,
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  id, title, deleteCategory, updateCategory,
}) => (
  <Grid container columnSpacing={2} sx={{ textAlign: 'center' }}>
    <Grid item sx={{ display: 'flex', mb: 1 }}>
      <FolderIcon sx={{ color: 'bakery.main' }} />
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField size="small" defaultValue={title} />
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="small" onClick={() => updateCategory(id)}>
        <EditIcon />
      </IconButton>
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="small" onClick={() => deleteCategory(id)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Grid>
  </Grid>

);

export default CategoryListItem;
