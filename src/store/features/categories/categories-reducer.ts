/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { CategoriesState, CategoriesAction } from './types';

const initialState: CategoriesState = {
  categories: [],
  loading: false,
};

const categoriesReducer: Reducer<CategoriesState, CategoriesAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORIES_FETCH_CATEGORIES_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'CATEGORIES_FETCH_CATEGORIES_SUCCESS': {
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    }

    case 'CATEGORIES_CREATE_NEW_CATEGORY':
      return {
        ...state,
        items: [
          ...state.categories,
          {
            ...action.payload.category,
            id: createId(),
          },
        ],
      };

    case 'CATEGORIES_UPDATE_CATEGORY': {
      const index = state.categories.findIndex((category) => category.id === action.payload.category.id);
      const newCategories = [...state.categories];
      newCategories[index] = action.payload.category;
      return {
        ...state,
        categories: newCategories,
      };
    }
    case 'CATEGORIES_DELETE_CATEGORY':
      return {
        ...state,
        items: state.categories.filter((category) => category.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default categoriesReducer;
