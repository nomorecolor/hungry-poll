import { Injectable } from '@angular/core';
import { FoodVote } from '../models/food-vote.type';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodVoteList: FoodVote[] = [{
    id: 1,
    food: 'Sinigang',
    submitterName: 'Fia Amarah Elemia',
    submitterImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    likerImageUrls: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80']
  },
  {
    id: 2,
    food: 'Adobo',
    submitterName: 'Freyja Amber Elemia',
    submitterImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    likerImageUrls: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80']
  },
  {
    id: 3,
    food: 'Pork Steak',
    submitterName: 'Alain Elemia',
    submitterImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    likerImageUrls: []
  }
  ];

  imageUrl = 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  constructor() { }

  getFoodVoteList = (): FoodVote[] => {
    return this.foodVoteList;
  }

  updateFoodVote = (id: number, prevId: number): number => {
    const filteredFoodVote = this.foodVoteList.filter(foodVote => foodVote.id === id);

    if (filteredFoodVote?.length) {
      filteredFoodVote[0].likerImageUrls.push(this.imageUrl);
    }

    const filteredPreviousFoodVote = this.foodVoteList.filter(foodVote => foodVote.id === prevId);

    if (filteredPreviousFoodVote?.length) {
      filteredPreviousFoodVote[0].likerImageUrls.pop();
    }

    return id;
  }

  addFood = (foodVote: FoodVote) => {
    foodVote.id = this.foodVoteList.length + 1;

    this.foodVoteList.push(foodVote);
  }
}
