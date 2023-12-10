import { Component } from '@angular/core';
import { FoodVoteListComponent } from './components/food-vote-list/food-vote-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodVoteListComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
