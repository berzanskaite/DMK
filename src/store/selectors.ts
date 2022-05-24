import { RootState } from './types';

// auth selectors
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectLoggedIn = (state: RootState) => Boolean(state.auth.user);

// navigation selectors
export const selectRedirect = (state: RootState) => state.navigation.redirect;

// items selectors
export const selectItems = (state: RootState) => state.items.items;
export const selectItemsLoading = (state: RootState) => state.items.loading;
