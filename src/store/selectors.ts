import { RootState } from './types';

// auth selectors
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAdmin = (state: RootState) => state.auth.admin;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoggedIn = (state: RootState) => Boolean(state.auth.admin);
export const selectAuthToken = (state: RootState) => state.auth.token;

// navigation selectors
export const selectRedirect = (state: RootState) => state.navigation.redirect;

// items selectors
export const selectItems = (state: RootState) => state.items.items;
export const selectItemsLoading = (state: RootState) => state.items.loading;

// categories selectors
export const selectCategories = (state: RootState) => { };

export const selectItemById = (id?: string) => (state: RootState) => (id ? state
  .items.items.find((item) => id === item.id) : undefined);
