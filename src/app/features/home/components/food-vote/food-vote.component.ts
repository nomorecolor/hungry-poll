import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUser } from '../../../../core/user/user.selectors';
import { FoodVote } from '../../models/food-vote.type';

@Component({
  selector: 'li[home-food-vote]',
  standalone: true,
  imports: [],
  templateUrl: './food-vote.component.html',
})
export class FoodVoteComponent {
  @Input() foodVote!: FoodVote;
  @Output() clickVoteEvent = new EventEmitter<number>();

  user$ = this.store.select(selectUser);

  constructor(private store: Store) {}

  clickVote() {
    this.clickVoteEvent.emit(this.foodVote.id);
  }

  get isVoted() {
    let isVoted = false;

    this.user$.subscribe((user) => {
      isVoted = this.foodVote.voters.some((x) => x.id === user.id);
    });

    return isVoted;
  }
}
