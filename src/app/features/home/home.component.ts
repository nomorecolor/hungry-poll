import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../core/authentication/auth.service';
import { selectUser } from '../../core/user/user.selectors';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { FoodVoteListComponent } from './components/food-vote-list/food-vote-list.component';
import { FoodVote } from './models/food-vote.type';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FoodVoteListComponent,
    AddFoodComponent,
    ModalComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  foodVoteList: FoodVote[] = [];
  previousFoodVoteId: number = 0;

  user$ = this.store.select(selectUser);

  constructor(
    private foodService: FoodService,
    private store: Store,
    private router: Router,
    protected authService: AuthService,
  ) {
    this.loadFoodVoteList();
  }

  loadFoodVoteList() {
    this.foodVoteList = this.foodService.getFoodVoteList();
  }

  clickVote(id: number) {
    this.user$.subscribe((user) => {
      this.previousFoodVoteId = this.foodService.updateFoodVote(
        id,
        this.previousFoodVoteId,
        user.imageUrl,
      );
    });
  }

  addFood(foodName: string) {
    this.user$.subscribe((user) => {
      const foodVote: FoodVote = {
        id: -1,
        food: foodName,
        submitterName: user.name,
        submitterImageUrl: user.imageUrl,
        likerImageUrls: [],
      };

      this.foodService.addFood(foodVote);

      this.loadFoodVoteList();
    });
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['/']);
  }
}
