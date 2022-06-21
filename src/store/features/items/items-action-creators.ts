import { Dispatch } from 'redux';
import ItemsService from 'services/items-service';
import { Item, CreateItem, ChangeItem } from 'types';
import { AppAction, RootState } from '../../types';
import {
  ItemsFetchItemsLoadingAction,
  ItemsFetchItemsSuccessAction,
} from './items-types';

const itemsFetchItemsLoadingAction: ItemsFetchItemsLoadingAction = {
  type: 'ITEMS_FETCH_ITEMS_LOADING',
};

const createItemsFecthItemsSuccessAction = (items: Item[]): ItemsFetchItemsSuccessAction => ({
  type: 'ITEMS_FETCH_ITEMS_SUCCESS',
  payload: { items },
});

export const itemsFetchItemsActionThunk = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(itemsFetchItemsLoadingAction);
  const items = await ItemsService.fetchItems();
  const itemsFetchItemsSuccessAction = createItemsFecthItemsSuccessAction(items);
  dispatch(itemsFetchItemsSuccessAction);
};

export const createItemsNewItemActionThunk = (item: CreateItem) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.createNewItem(item, token);
  itemsFetchItemsActionThunk(dispatch);
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
  itemsFetchItemsActionThunk(dispatch);
};

export const createItemsDeleteItemActionThunk = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await ItemsService.deleteItem(id, token);
  itemsFetchItemsActionThunk(dispatch);
};
