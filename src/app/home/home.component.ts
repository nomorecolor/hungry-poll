import { Component } from '@angular/core';

import { ModalComponent } from '../shared/components/modal/modal.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { FoodVoteListComponent } from './components/food-vote-list/food-vote-list.component';
import { FoodVote } from './models/food-vote.type';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodVoteListComponent, AddFoodComponent, ModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  foodVoteList: FoodVote[] = [];
  previousFoodVoteId: number = 0;

  constructor(private foodService: FoodService) {
    this.loadFoodVoteList();
  }

  loadFoodVoteList() {
    this.foodVoteList = this.foodService.getFoodVoteList();
  }

  clickVote(id: number) {
    this.previousFoodVoteId = this.foodService.updateFoodVote(
      id,
      this.previousFoodVoteId,
    );
  }

  addFood(foodName: string) {
    const foodVote: FoodVote = {
      id: -1,
      food: foodName,
      submitterName: 'Faith Elemia',
      submitterImageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      likerImageUrls: [],
    };

    this.foodService.addFood(foodVote);

    this.loadFoodVoteList();
  }
}
