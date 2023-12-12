import { ModalService } from './../../../../shared/services/modal.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-add-food',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, CommonModule],
  templateUrl: './add-food.component.html'
})
export class AddFoodComponent {
  @Output() addFoodEvent = new EventEmitter<string>;

  foodForm = new FormGroup({
    foodName: new FormControl('', Validators.required)
  });

  constructor(protected modalService: ModalService) { }

  addFood() {
    this.addFoodEvent.emit(this.foodForm.controls.foodName.value!);
    this.modalService.close();
  }
}
