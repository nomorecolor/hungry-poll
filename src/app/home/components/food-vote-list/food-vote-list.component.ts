import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FoodVote } from '../../models/food-vote.type';
import { FoodVoteComponent } from '../food-vote/food-vote.component';

@Component({
  selector: 'home-food-vote-list',
  standalone: true,
  imports: [FoodVoteComponent],
  templateUrl: './food-vote-list.component.html',
})
export class FoodVoteListComponent {
  @Input() foodVoteList: FoodVote[] = [];
  @Output() clickVoteEvent = new EventEmitter<number>();

  clickVote(id: number) {
    this.clickVoteEvent.emit(id);
  }
}
