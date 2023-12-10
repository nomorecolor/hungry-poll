import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home-add-food',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-food.component.html'
})
export class AddFoodComponent {
  @Output() addFoodEvent = new EventEmitter<string>;

  foodName = '';
  isAdding = false;

  addFood() {
    this.addFoodEvent.emit(this.foodName);
    this.isAdding = false;
  }
}
