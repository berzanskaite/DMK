import React, { useEffect } from 'react';
import {
  Button, CircularProgress, Container, Typography,
} from '@mui/material';
import ItemsContainer from 'components/itemscontainer';
import SectionTitle from '../../components/sectiontitle';
import AdminItemCard from './admin-item-card';
import { useRootSelector } from '../../store';
import { selectUser, selectItems, selectItemsLoading } from '../../store/selectors';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';
import {
  itemsUpdateItemAction,
  itemsFetchItemsAction,
  itemsCreateNewItemAction,
  itemsDeleteItemAction,
} from '../../store/features/items/action-creators';

const AdminPage: React.FC = () => {
  const user = useRootSelector(selectUser);
  const items = useRootSelector(selectItems);
  const itemsLoading = useRootSelector(selectItemsLoading);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(itemsFetchItemsAction);
  }, []);

  let content = (
    <Container sx={{ my: 5, textAlign: 'center' }}><CircularProgress color="primary" size={60} /></Container>
  );

  if (!itemsLoading) {
    content = items.length > 0 ? (
      <ItemsContainer>
        {items.map((itemProps) => <AdminItemCard key={itemProps.id} {...itemProps} updateItem={() => dispatch(itemsUpdateItemAction(itemProps.id))} deleteItem={() => dispatch(itemsDeleteItemAction(itemProps.id))} />)}
      </ItemsContainer>
    ) : <Typography>Prekiu nera</Typography>;
  }
  return (
    <Container sx={{ my: 5, textAlign: 'center' }}>
      <SectionTitle title="Admin Page" description={`Labas, ${user?.email}!`} />
      <Button variant="contained" onClick={() => dispatch(authLogoutAction)}>Atsijungti</Button>
      <Button onClick={() => dispatch(itemsCreateNewItemAction)} variant="contained" sx={{ ml: 2 }}>Sukurti naują produktą</Button>
      {content}
    </Container>
  );
};

export default AdminPage;
