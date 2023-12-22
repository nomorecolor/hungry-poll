import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User, UserProfile } from './user.type';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{ userProfile: UserProfile }>(),
    'Load User Success': props<{ user: User }>(),
    'Load User Failure': emptyProps(),
    'Load User Profile': emptyProps(),
    'Load User Profile Failure': emptyProps(),
  },
});
