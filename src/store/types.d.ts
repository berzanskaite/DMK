import { ThunkDispatch } from 'redux-thunk';
import { ItemsAction, ItemsState } from './features/items/types';
import { AuthAction, AuthState } from './features/auth/auth-types';
import { NavigationAction, NavigationState } from './features/navigation/types';

export type RootState = {
  items: ItemsState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = AuthAction | ItemsAction | NavigationAction;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
