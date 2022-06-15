/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { ItemsState, ItemsAction } from './types';

const initialState: ItemsState = {
  items: [],
  loading: false,
};

const itemsReducer: Reducer<ItemsState, ItemsAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_ITEMS_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'ITEMS_FETCH_ITEMS_SUCCESS': {
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    }

    case 'ITEMS_DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default itemsReducer;
