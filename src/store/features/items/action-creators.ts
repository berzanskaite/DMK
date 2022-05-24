import { Dispatch } from 'redux';
import axios from 'axios';
import { AppAction, RootState } from '../../types';
import {
  ItemsFetchItemsLoadingAction,
  ItemsFetchItemsSuccessAction,
  ItemsCreateNewItemAction,
  ItemsUpdateItemAction,
  ItemsDeleteItemAction,
} from './types';
import { Item } from '../../../types';
import pause from '../../../helpers/pause';

const itemsFetchItemsLoadingAction: ItemsFetchItemsLoadingAction = {
  type: 'ITEMS_FETCH_ITEMS_LOADING',
};

const createItemsFecthItemsSuccessAction = (items: Item[]): ItemsFetchItemsSuccessAction => ({
  type: 'ITEMS_FETCH_ITEMS_SUCCESS',
  payload: { items },
});

export const itemsFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(itemsFetchItemsLoadingAction);

  const { data } = await axios.get<Item[]>('http://localhost:8000/items');
  await pause(2000);
  const shopFecthItemsSuccessAction = createItemsFecthItemsSuccessAction(data);
  dispatch(shopFecthItemsSuccessAction);
};

export const itemsCreateNewItemAction: ItemsCreateNewItemAction = {
  type: 'ITEMS_CREATE_NEW_ITEM',
};

export const itemsUpdateItemAction = (id: string): ItemsUpdateItemAction => ({
  type: 'ITEMS_UPDATE_ITEM',
  payload: { id },
});

export const itemsDeleteItemAction = (id: string): ItemsDeleteItemAction => ({
  type: 'ITEMS_DELETE_ITEM',
  payload: { id },
});
