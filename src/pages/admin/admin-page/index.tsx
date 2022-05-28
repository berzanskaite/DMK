import React, { useEffect } from 'react';
import {
  Button, CircularProgress, Container, Typography,
} from '@mui/material';
import ItemsContainer from 'components/itemscontainer';
import { Item } from 'types';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../../components/sectiontitle';
import AdminItemCard from './admin-item-card';
import { useRootSelector } from '../../../store';
import { selectUser, selectItems, selectItemsLoading } from '../../../store/selectors';
import { useRootDispatch } from '../../../store/hooks';
import {
  itemsFetchItemsAction,
  createItemsDeleteItemAction,
} from '../../../store/features/items/action-creators';

const AdminPage: React.FC = () => {
  const user = useRootSelector(selectUser);
  const items = useRootSelector(selectItems);
  const itemsLoading = useRootSelector(selectItemsLoading);
  const dispatch = useRootDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(itemsFetchItemsAction);
  }, []);

  console.log(items, itemsLoading);

  let content = (
    <Container sx={{ my: 5, textAlign: 'center' }}><CircularProgress color="primary" size={60} /></Container>
  );

  if (!itemsLoading) {
    content = items.length > 0 ? (
      <ItemsContainer>
        {items.map((itemProps) => (
          <AdminItemCard
            key={itemProps.id}
            {...itemProps}
            deleteItem={() => dispatch(createItemsDeleteItemAction(itemProps.id))}
          />
        ))}
      </ItemsContainer>
    ) : <Typography>Prekių nėra</Typography>;
  }
  return (
    <Container sx={{ my: 5, textAlign: 'center' }}>
      <SectionTitle title="Admin Page" description={`Labas, ${user?.email}!`} />
      <Button onClick={() => navigate('/admin/create-new-item')} variant="contained" sx={{ ml: 2 }}>Sukurti naują produktą</Button>
      {content}
    </Container>
  );
};

export default AdminPage;
