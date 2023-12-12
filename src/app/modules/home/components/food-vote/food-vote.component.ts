import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodVote } from '../../models/food-vote.type';

@Component({
  selector: 'li[home-food-vote]',
  standalone: true,
  imports: [],
  templateUrl: './food-vote.component.html'
})
export class FoodVoteComponent {
  @Input() foodVote!: FoodVote;
  @Output() clickVoteEvent = new EventEmitter<number>();

  clickVote() {
    this.clickVoteEvent.emit(this.foodVote.id);
  }
}
