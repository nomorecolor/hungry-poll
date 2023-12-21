import { User } from '../../../core/user/user.type';

export interface FoodVote {
  id: number;
  foodName: string;
  createdByUser: User;
  voters: User[];
}
