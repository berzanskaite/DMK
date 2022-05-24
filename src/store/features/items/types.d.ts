import { Item } from '../../../types';

export type ItemsState = {
  items: Item[],
  loading: boolean
};

export type ItemsFetchItemsLoadingAction = {
  type: 'ITEMS_FETCH_ITEMS_LOADING'
};

export type ItemsFetchItemsSuccessAction = {
  type: 'ITEMS_FETCH_ITEMS_SUCCESS',
  payload: {
    items: Item[],
  }
};

export type ItemsFetchItemsFailureAction = {
  type: 'ITEMS_FETCH_ITEMS_FAILURE',
  payload: {
    error: string,
  }
};

export type ItemsCreateNewItemAction = {
  type: 'ITEMS_CREATE_NEW_ITEM',
};

export type ItemsUpdateItemAction = {
  type: 'ITEMS_UPDATE_ITEM',
  payload: {
    id: string,
  }
};

export type ItemsDeleteItemAction = {
  type: 'ITEMS_DELETE_ITEM',
  payload: {
    id: string,
  }
};

export type ItemsAction = ItemsFetchItemsLoadingAction | ItemsFetchItemsSuccessAction | ItemsFetchItemsFailureAction | ItemsCreateNewItemAction | ItemsUpdateItemAction | ItemsDeleteItemAction;
