import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVoteListComponent } from './food-vote-list.component';

describe('FoodVoteListComponent', () => {
  let component: FoodVoteListComponent;
  let fixture: ComponentFixture<FoodVoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodVoteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodVoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
