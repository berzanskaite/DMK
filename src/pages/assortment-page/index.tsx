import React, { useState, useEffect } from 'react';
import {
  CircularProgress, Container, Pagination, Stack, Typography,
} from '@mui/material';
import { useRootDispatch, useRootSelector } from 'store/hooks';
import { createItemsDeleteItemAction, itemsFetchItemsAction } from 'store/action-creators';
import ItemCard from 'components/itemcard';
import SectionTitle from 'components/sectiontitle';
import ItemsContainer from 'components/itemscontainer';
import ChangeCategorySelect from 'pages/admin/admin-page/change-category-select';
import { selectItems, selectItemsLoading } from 'store/selectors';

const AssortmentPage: React.FC = () => {
  const items = useRootSelector(selectItems);
  const itemsLoading = useRootSelector(selectItemsLoading);
  const dispatch = useRootDispatch();
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    dispatch(itemsFetchItemsAction);
  }, []);

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
          )).slice(0, 6)}
          <Stack spacing={2}>
            <Pagination count={Math.round(items.length / 6)} />
          </Stack>
        </ItemsContainer>
      );
    } else if (items.length === 0) {
      content = <Typography>Prekių nėra</Typography>;
    } else if (filter !== '') {
      content = (
        <ItemsContainer>
          {items.filter((item) => item.categories.some((category) => category.id === filter)).map((itemProps) => (
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
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="assortment">
      <SectionTitle title="Asortimentas" description="Nuo ruginės duonos iki šventinių pyragų" />
      <ChangeCategorySelect onChange={(value) => { setFilter(value); }} />
      {content}
    </Container>
  );
};

export default AssortmentPage;
