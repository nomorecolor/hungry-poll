import { createReducer, on } from '@ngrx/store';

import { UserActions } from './user.actions';
import { User } from './user.type';

// TODO: Get user details from API
export const initialState: User = { name: '', imageUrl: '' };

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, (): User => initialState),
  on(UserActions.loadUserSuccess, (_state, { user }): User => user),
  on(UserActions.loadUserFailure, (_state): User => _state),
);
