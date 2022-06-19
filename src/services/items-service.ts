import { CreateItem, Item } from 'types';
import ApiService from './api-service-new';
import { ChangeItem } from '../types/item';

const fetchItems = async (): Promise<Item[]> => {
  const { data } = await ApiService.get<{ items: Item[] }>('api/items?populate=categories');
  return data.items;
};

const deleteItem = async (id: string, token: string) => {
  const { data } = await ApiService.delete<{ item: Item }>(`api/items/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return data.item;
};

const createNewItem = async (item: CreateItem, token: string) => {
  const { data } = await ApiService.post<{ item: CreateItem }>(
    'api/items/',
    item,
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return data.item;
};

const changeItem = async (item: ChangeItem, token: string) => {
  const { data } = await ApiService.patch<{ item: ChangeItem }>(
    `api/items/${item.id}`,
    {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      weight: item.weight,
      img: item.img,
      composition: item.composition,
      categories: item.categories,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return data.item;
};

const ItemsService = {
  fetchItems,
  deleteItem,
  createNewItem,
  changeItem,
};

export default ItemsService;
