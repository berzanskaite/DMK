import { Dispatch } from 'redux';
import ItemsService from 'services/items-service';
import { Item, CreateItem, ChangeItem } from 'types';
import { AppAction, RootState } from '../../types';
import {
  ItemsFetchItemsLoadingAction,
  ItemsFetchItemsSuccessAction,
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
  const itemsFetchItemsSuccessAction = createItemsFecthItemsSuccessAction(items);
  dispatch(itemsFetchItemsSuccessAction);
};

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

export const createItemsUpdateItemActionThunk = (item: ChangeItem) => async (
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

export const createItemsDeleteItemAction = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.deleteItem(id, token);
  itemsFetchItemsAction(dispatch);
};
