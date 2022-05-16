import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container } from '@mui/material';
import ItemsContainer from 'components/itemscontainer';
import SectionTitle from '../../components/sectiontitle';
import AdminItemCard from './admin-item-card';
import { useRootSelector } from '../../store';
import AuthContext from '../../features/auth/auth-context';

const AdminPage: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
  const items = useRootSelector((state) => (state.items));
  const dispatch = useDispatch();

  const updateItem = (id: string): void => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: { id },
    });
  };

  const createNewItem = (): void => {
    dispatch({
      type: 'CREATE_NEW_ITEM',
      payload: {},
    });
  };

  const deleteItem = (id: string): void => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: { id },
    });
  };

  return (
    <Container sx={{ my: 5, textAlign: 'center' }}>
      <SectionTitle title="Admin Page" description={`Labas, ${user?.email}!`} />
      <Button variant="contained" onClick={logout}>Atsijungti</Button>
      <Button onClick={() => createNewItem()} variant="contained" sx={{ ml: 2 }}>Sukurti naują produktą</Button>
      <ItemsContainer>
        {items.map((itemProps) => <AdminItemCard key={itemProps.id} {...itemProps} updateItem={updateItem} deleteItem={deleteItem} />)}
      </ItemsContainer>
    </Container>
  );
};

export default AdminPage;
