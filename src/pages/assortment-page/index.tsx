import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import { Item } from 'types';
import { useRootDispatch } from 'store/hooks';
import { createItemsDeleteItemAction } from 'store/action-creators';
import ItemCard from 'components/itemcard';
import SectionTitle from 'components/sectiontitle';
import ItemsContainer from 'components/itemscontainer';

const AssortmentPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const dispatch = useRootDispatch();

  useEffect(() => {
    axios.get<Item[]>('http://localhost:8000/items')
      .then(({ data }) => setItems(data))
      .catch(console.error);
  }, []);

  return (
    <Container id="assortment">
      <SectionTitle title="Asortimentas" description="Nuo ruginės duonos iki šventinių pyragų" />
      <ItemsContainer>
        {items.map((itemProps) => (
          <ItemCard
            key={itemProps.id}
            {...itemProps}
            deleteItem={() => dispatch(createItemsDeleteItemAction(itemProps.id))}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default AssortmentPage;
