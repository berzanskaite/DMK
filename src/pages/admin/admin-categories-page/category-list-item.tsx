import React from 'react';
import {
  Avatar,
  Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import { Category } from 'types';

type CategoryListItemProps = Category & {
  deleteCategory: (categoryId: string) => void,
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  id, title, deleteCategory,
}) => (
  <List>
    <ListItem
      secondaryAction={(
        <IconButton edge="end" aria-label="delete" onClick={() => deleteCategory(id)}>
          <DeleteIcon />
        </IconButton>
      )}
    >
      <ListItemAvatar>
        <FolderIcon sx={{ height: '28px', color: 'bakery.dark' }} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
      />
    </ListItem>
  </List>
);

export default CategoryListItem;
