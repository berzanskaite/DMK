/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { State, Action } from './types';

const initialState: State = {
  items: [
    {
      id: '7',
      title: 'Duona',
      description: 'Skani duona',
      price: 2,
      weight: 1,
      img: 'https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg',
    },
    {
      id: '8',
      title: 'Batonas',
      description: 'Šviežias batonas',
      price: 2,
      weight: 1,
      img: 'https://www.girlversusdough.com/wp-content/uploads/2020/04/italian-bread-3.jpg',
    },
    {
      id: '9',
      title: 'Pyragas',
      description: 'Minkštas pyragas',
      price: 2,
      weight: 1,
      img: 'https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/9/7/3/0/2970379-1-eng-GB/EU-grants-protected-status-to-UK-Bramley-apple-pie-filling.jpg',
    },
  ],
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_ITEM':
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
    case 'UPDATE_ITEM': {
      const index = state.items.findIndex((x) => x.id === action.payload.id);
      const newArray = [...state.items];
      newArray[index].title = 'Redaguotas pavadinimas';
      newArray[index].description = 'Redaguotas aprasymas';
      newArray[index].price = 25;
      newArray[index].weight = 13;
      return {
        ...state,
        items: newArray,
      };
    }
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default mainReducer;
