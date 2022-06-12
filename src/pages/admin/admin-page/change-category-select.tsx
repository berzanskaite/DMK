import React, { useState } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';

const ChangeCategorySelect = (props: { onChange: (value: string) => void }) => {
  const { onChange } = props;
  const [category, setCategory] = useState('');
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
        <MenuItem value="">---</MenuItem>
        <MenuItem value="cat1">Mieliniai kepiniai</MenuItem>
        <MenuItem value="cat2">Pyragai</MenuItem>
        <MenuItem value="cat3">Duonos</MenuItem>
        <MenuItem value="cat4">Bandelės</MenuItem>
        <MenuItem value="cat5">Kepiniai su raugu</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChangeCategorySelect;
