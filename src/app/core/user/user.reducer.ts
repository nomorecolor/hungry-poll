import { createReducer, on } from '@ngrx/store';

import { UserActions } from './user.actions';
import { User } from './user.type';

export const initialState: User = {
  id: '',
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  externalId: '',
  imageUrl: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, (): User => initialState),
  on(UserActions.loadUserSuccess, (_state, { user }): User => user),
  on(UserActions.loadUserFailure, (_state): User => _state),
);
