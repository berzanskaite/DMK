import React, { useState } from 'react';
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
  updateCategory: (categoryId: string, title: string) => void,
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  id, title, deleteCategory, updateCategory,
}) => {
  const [value, setValue] = useState(title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Grid container columnSpacing={2} sx={{ textAlign: 'center' }}>
      <Grid item sx={{ display: 'flex', mb: 1 }}>
        <FolderIcon sx={{ color: 'bakery.main' }} />
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField size="small" value={value} onChange={handleChange} />
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="small" onClick={() => updateCategory(id, value)}>
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
};
export default CategoryListItem;
