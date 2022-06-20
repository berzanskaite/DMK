import { Dispatch } from 'redux';
import { CreateCategory, Category } from 'types';
import CategoriesService from 'services/categories-service';
import { AppAction, RootState } from '../../types';
import {
  CategoriesFetchCategoriesLoadingAction,
  CategoriesFetchCategoriesSuccessAction,
} from './categories-types';

const categoriesFetchCategoriesLoadingAction: CategoriesFetchCategoriesLoadingAction = {
  type: 'CATEGORIES_FETCH_CATEGORIES_LOADING',
};

const createCategoriesFetchCategoriesSuccessAction = (categories: Category[]): CategoriesFetchCategoriesSuccessAction => ({
  type: 'CATEGORIES_FETCH_CATEGORIES_SUCCESS',
  payload: { categories },
});

export const categoriesFetchCategoriesAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(categoriesFetchCategoriesLoadingAction);
  const categories = await CategoriesService.fetchCategories();
  const categoriesFetchCategoriesSuccessAction = createCategoriesFetchCategoriesSuccessAction(categories);
  dispatch(categoriesFetchCategoriesSuccessAction);
};

export const createCategoriesUpdateCategoryAction = (category: Category) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await CategoriesService.changeCategory(category, token);
  categoriesFetchCategoriesAction(dispatch);
};

export const createCategoriesDeleteCategoryAction = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await CategoriesService.deleteCategory(id, token);
  categoriesFetchCategoriesAction(dispatch);
};

export const createCategoriesCreateNewCategoryAction = (category: CreateCategory) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Prašome prisijungti');
  }
  await CategoriesService.createNewCategory(category, token);
  categoriesFetchCategoriesAction(dispatch);
};
