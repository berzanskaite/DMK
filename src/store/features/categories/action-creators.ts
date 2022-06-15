import { Dispatch } from 'redux';
import { CreateCategory, Category } from 'types';
import pause from 'helpers/pause';
import CategoriesService from 'services/categories-service';
import { AppAction } from '../../types';
import {
  CategoriesFetchCategoriesLoadingAction,
  CategoriesFetchCategoriesSuccessAction,
  CategoriesCreateNewCategoryAction,
  CategoriesUpdateCategoryAction,
  CategoriesDeleteCategoryAction,
} from './types';

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
  await pause(2000);
  const categoriesFetchCategoriesSuccessAction = createCategoriesFetchCategoriesSuccessAction(categories);
  dispatch(categoriesFetchCategoriesSuccessAction);
};

const categoriesUpdateCategoryAction = (category: Category): CategoriesUpdateCategoryAction => ({
  type: 'CATEGORIES_UPDATE_CATEGORY',
  payload: { category },
});

export const createCategoriesUpdateCategoryAction = (category: Category) => async (dispatch: Dispatch<AppAction>) => {
  await CategoriesService.changeCategory(category);
  dispatch(categoriesUpdateCategoryAction(category));
};

const categoriesDeleteCategoryAction = (id: string): CategoriesDeleteCategoryAction => ({
  type: 'CATEGORIES_DELETE_CATEGORY',
  payload: { id },
});

export const createCategoriesDeleteCategoryAction = (id: string) => async (dispatch: Dispatch<AppAction>) => {
  await CategoriesService.deleteCategory(id);
  dispatch(categoriesDeleteCategoryAction(id));
};

const categoriesCreateNewCategoryAction = (category: CreateCategory): CategoriesCreateNewCategoryAction => ({
  type: 'CATEGORIES_CREATE_NEW_CATEGORY',
  payload: { category },
});

export const createCategoriesCreateNewCategoryAction = (category: CreateCategory) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await CategoriesService.createNewCategory(category);
  dispatch(categoriesCreateNewCategoryAction(category));
};
