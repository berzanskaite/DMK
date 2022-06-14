import { Category, CreateCategory } from 'types';

export type CategoriesState = {
  categories: Category[],
  loading: boolean
};

export type CategoriesFetchCategoriesLoadingAction = {
  type: 'CATEGORIES_FETCH_CATEGORIES_LOADING'
};

export type CategoriesFetchCategoriesSuccessAction = {
  type: 'CATEGORIES_FETCH_CATEGORIES_SUCCESS',
  payload: {
    categories: Category[],
  }
};

export type CategoriesFetchCategoriesFailureAction = {
  type: 'CATEGORIES_FETCH_CATEGORIES_FAILURE',
  payload: {
    error: string,
  }
};

export type CategoriesCreateNewCategoryAction = {
  type: 'CATEGORIES_CREATE_NEW_CATEGORY',
  payload: {
    category: CreateCategory;
  }
};

export type CategoriesUpdateCategoryAction = {
  type: 'CATEGORIES_UPDATE_CATEGORY',
  payload: {
    category: Category;
  }
};

export type CategoriesDeleteCategoryAction = {
  type: 'CATEGORIES_DELETE_CATEGORY',
  payload: {
    id: string,
  }
};

export type CategoriesAction = CategoriesFetchCategoriesLoadingAction | CategoriesFetchCategoriesSuccessAction | CategoriesFetchCategoriesFailureAction | CategoriesCreateNewCategoryAction | CategoriesUpdateCategoryAction | CategoriesDeleteCategoryAction;
