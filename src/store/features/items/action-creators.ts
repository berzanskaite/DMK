import { Dispatch } from 'redux';
import axios from 'axios';
import ItemsService from 'services/items-api-service';
import { AppAction } from '../../types';
import {
  ItemsFetchItemsLoadingAction,
  ItemsFetchItemsSuccessAction,
  ItemsCreateNewItemAction,
  ItemsUpdateItemAction,
  ItemsDeleteItemAction,
} from './types';
import { Item, CreateItem } from '../../../types';
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

  const items = await ItemsService.fetchItems();
  await pause(2000);
  const itemsFetchItemsSuccessAction = createItemsFecthItemsSuccessAction(items);
  dispatch(itemsFetchItemsSuccessAction);
};

const itemsUpdateItemAction = (item: Item): ItemsUpdateItemAction => ({
  type: 'ITEMS_UPDATE_ITEM',
  payload: { item },
});

export const createItemsUpdateItemAction = (item: Item) => async (dispatch: Dispatch<AppAction>) => {
  await ItemsService.changeItem(item);
  dispatch(itemsUpdateItemAction(item));
};

const itemsDeleteItemAction = (id: string): ItemsDeleteItemAction => ({
  type: 'ITEMS_DELETE_ITEM',
  payload: { id },
});

export const createItemsDeleteItemAction = (id: string) => async (dispatch: Dispatch<AppAction>) => {
  await ItemsService.deleteItem(id);
  dispatch(itemsDeleteItemAction(id));
};

const itemsCreateNewItemAction = (item: CreateItem): ItemsCreateNewItemAction => ({
  type: 'ITEMS_CREATE_NEW_ITEM',
  payload: { item },
});

export const createItemsNewItemAction = (item: CreateItem) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await ItemsService.createNewItem(item);
  dispatch(itemsCreateNewItemAction(item));
};
