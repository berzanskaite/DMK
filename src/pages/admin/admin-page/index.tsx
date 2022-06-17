import React, { useEffect, useState } from 'react';
import {
  Box,
  Button, CircularProgress, Container, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemsContainer from 'components/itemscontainer';
import ItemCard from 'components/itemcard';
import SectionTitle from 'components/sectiontitle';
import { useRootSelector } from 'store';
import { selectAdmin, selectItems, selectItemsLoading } from 'store/selectors';
import { useRootDispatch } from 'store/hooks';
import {
  itemsFetchItemsAction,
  createItemsDeleteItemAction,
} from 'store/features/items/action-creators';
import ChangeCategorySelect from './change-category-select';

const AdminPage: React.FC = () => {
  const admin = useRootSelector(selectAdmin);
  const items = useRootSelector(selectItems);
  const itemsLoading = useRootSelector(selectItemsLoading);
  const dispatch = useRootDispatch();
  const navigate = useNavigate();

  // Bandymai
  // const item1 = {
  //   title: 'pirmasItem',
  //   categories: ['1', '2'],
  // };
  // const item2 = {
  //   title: 'antrasItem',
  //   categories: ['2', '3'],
  // };
  // const item3 = {
  //   title: 'treciasItem',
  //   categories: ['3'],
  // };
  // const filtruotaCat = '3';
  // const itemai = [item1, item2, item3];
  // console.log(itemai.filter((item) => item.categories.some((category) => category === filtruotaCat)));
  // Baigiasi bandymai

  useEffect(() => {
    dispatch(itemsFetchItemsAction);
  }, []);

  const [filter, setFilter] = useState<string>('');
  console.log(items.filter((item) => item.categories.some((category) => category === filter)));

  let content = (
    <Container sx={{ my: 5, textAlign: 'center' }}><CircularProgress color="primary" size={60} /></Container>
  );

  if (!itemsLoading) {
    if (items.length > 0 && filter === '') {
      content = (
        <ItemsContainer>
          {items.map((itemProps) => (
            <ItemCard
              key={itemProps.id}
              {...itemProps}
              deleteItem={() => dispatch(createItemsDeleteItemAction(itemProps.id))}
            />
          ))}
        </ItemsContainer>
      );
    } else if (items.length === 0) {
      content = <Typography>Prekių nėra</Typography>;
    } else if (filter !== '') {
      content = (
        <ItemsContainer>
          {items.filter((item) => item.categories.some((category) => category === filter)).map((itemProps) => (
            <ItemCard
              key={itemProps.id}
              {...itemProps}
              deleteItem={() => dispatch(createItemsDeleteItemAction(itemProps.id))}
            />
          ))}
        </ItemsContainer>
      );
    }
  }
  return (
    <Container sx={{ my: 5, textAlign: 'center' }}>
      <SectionTitle title="Admin Page" description={`Labas, ${admin?.email}!`} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => navigate('/admin/create-new-item')} variant="contained" sx={{ ml: 2 }}>Sukurti naują produktą</Button>
        <ChangeCategorySelect onChange={(value) => { setFilter(value); }} />
        <Button onClick={() => navigate('/admin/categories')} variant="contained" sx={{ ml: 2 }}>Tvarkyti kategorijas</Button>
      </Box>
      {content}
    </Container>
  );
};

export default AdminPage;
