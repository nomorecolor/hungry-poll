import { createFeatureSelector } from '@ngrx/store';

import { User } from './user.type';

export const selectUser = createFeatureSelector<User>('user');
