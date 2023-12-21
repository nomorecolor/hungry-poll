import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../../core/user/user.type';
import { FoodVote } from '../models/food-vote.type';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodVoteList: FoodVote[] = [
    {
      id: 1,
      foodName: 'Sinigang',
      createdByUser: {
        id: '',
        name: 'Fia Amarah Elemia',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      voters: [
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 2,
      foodName: 'Adobo',
      createdByUser: {
        id: '',
        name: 'Freyja Amber Elemia',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      voters: [
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '',
          name: '',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 3,
      foodName: 'Pork Steak',
      createdByUser: {
        id: '',
        name: 'Alain Elemia',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      voters: [],
    },
  ];

  constructor(private http: HttpClient) {}

  getFoodVoteList = (): Observable<FoodVote[]> => {
    return this.http.get<FoodVote[]>('https://localhost:7258/api/Auth');
  };

  updateFoodVote = (id: number, prevId: number, voter: User): number => {
    const filteredFoodVote = this.foodVoteList.filter(
      (foodVote) => foodVote.id === id,
    );

    if (filteredFoodVote?.length) {
      filteredFoodVote[0].voters.push(voter);
    }

    const filteredPreviousFoodVote = this.foodVoteList.filter(
      (foodVote) => foodVote.id === prevId,
    );

    if (filteredPreviousFoodVote?.length) {
      filteredPreviousFoodVote[0].voters.pop();
    }

    return id;
  };

  addFood = (foodVote: FoodVote) => {
    foodVote.id = this.foodVoteList.length + 1;

    this.foodVoteList.push(foodVote);
  };
}
