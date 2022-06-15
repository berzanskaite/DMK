import { Dispatch } from 'redux';
import ItemsService from 'services/items-service';
import { Item, CreateItem } from 'types';
import pause from 'helpers/pause';
import { AppAction, RootState } from '../../types';
import {
  ItemsFetchItemsLoadingAction,
  ItemsFetchItemsSuccessAction,
  ItemsCreateNewItemAction,
  ItemsUpdateItemAction,
  ItemsDeleteItemAction,
} from './types';

const itemsFetchItemsLoadingAction: ItemsFetchItemsLoadingAction = {
  type: 'ITEMS_FETCH_ITEMS_LOADING',
};

const createItemsFecthItemsSuccessAction = (items: Item[]): ItemsFetchItemsSuccessAction => ({
  type: 'ITEMS_FETCH_ITEMS_SUCCESS',
  payload: { items },
});

export const itemsFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(itemsFetchItemsLoadingAction);
  const items = await ItemsService.fetchItems();
  await pause(2000);
  const itemsFetchItemsSuccessAction = createItemsFecthItemsSuccessAction(items);
  dispatch(itemsFetchItemsSuccessAction);
};

const itemsCreateNewItemAction = (item: CreateItem): ItemsCreateNewItemAction => ({
  type: 'ITEMS_CREATE_NEW_ITEM',
  payload: { item },
});

export const createItemsNewItemAction = (item: CreateItem) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.createNewItem(item, token);
  itemsFetchItemsAction(dispatch);
};

export const createItemsUpdateItemAction = (item: Item) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.changeItem(item, token);
  itemsFetchItemsAction(dispatch);
};

const itemsDeleteItemAction = (id: string): ItemsDeleteItemAction => ({
  type: 'ITEMS_DELETE_ITEM',
  payload: { id },
});

export const createItemsDeleteItemAction = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.deleteItem(id, token);
  dispatch(itemsDeleteItemAction(id));
};
