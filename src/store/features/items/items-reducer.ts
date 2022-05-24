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

    case 'ITEMS_CREATE_NEW_ITEM':
      return {

        ...state,
        items: [
          ...state.items,
          {
            id: createId(),
            title: 'Nauja preke',
            description: 'Naujas aprasymas',
            price: 12,
            weight: 4,
            img: 'https://www.richsusa.com/wp-content/uploads/2021/04/Bread-Guide-Hero-for-Signature-Breads.jpg',
          },
        ],
      };
    case 'ITEMS_UPDATE_ITEM': {
      const index = state.items.findIndex((x) => x.id === action.payload.id);
      const newItems = [...state.items];
      newItems[index].title = 'Redaguotas pavadinimas';
      newItems[index].description = 'Redaguotas aprasymas';
      newItems[index].price = 25;
      newItems[index].weight = 13;
      return {
        ...state,
        items: newItems,
      };
    }
    case 'ITEMS_DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default itemsReducer;
