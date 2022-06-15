import React, { useState, useEffect } from 'react';
import { Category } from 'types';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import axios from 'axios';

const ChangeCategorySelect = (props: { onChange: (value: string) => void }) => {
  const { onChange } = props;
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get<Category[]>('http://localhost:8000/categories')
      .then(({ data }) => setCategories(data))
      .catch(console.error);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ ml: '20px', width: '150px' }}>
      <InputLabel>Kategorija</InputLabel>
      <Select
        id="category-select"
        value={category}
        label="category"
        onChange={handleChange}
      >
        <MenuItem value="">Visos kategorijos</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>{cat.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChangeCategorySelect;
