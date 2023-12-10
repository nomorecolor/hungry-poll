import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodVote } from '../../models/food-vote.type';

@Component({
  selector: 'li[food-vote]',
  standalone: true,
  imports: [],
  templateUrl: './food-vote.component.html'
})
export class FoodVoteComponent {
  @Input() foodVote!: FoodVote;
  @Output() addItemEvent = new EventEmitter<string>();

  likerImageUrl = 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  updateLiker = (e: Event) => {
    let isChecked = (e.target as HTMLInputElement).checked;
    this.foodVote.likerImageUrls?.push(this.likerImageUrl);
  }
}
