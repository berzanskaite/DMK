import { CreateItem, Item } from 'types';
import ApiService from './api-service';

const fetchItems = async (): Promise<Item[]> => {
  const { data } = await ApiService.get<Item[]>('/items');
  return data;
};

const deleteItem = async (id: string) => {
  const { data } = await ApiService.delete<Item>(`/items/${id}`);
  return data;
};

const createNewItem = async (item: CreateItem) => {
  const { data } = await ApiService.post<Item>('/items/', item);
  return data;
};

const changeItem = async (item: Item) => {
  const { data } = await ApiService.patch<Item>(`items/${item.id}`, item);
  return data;
};

const ItemsService = {
  fetchItems,
  deleteItem,
  createNewItem,
  changeItem,
};

export default ItemsService;
