import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVoteComponent } from './food-vote.component';

describe('FoodVoteComponent', () => {
  let component: FoodVoteComponent;
  let fixture: ComponentFixture<FoodVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodVoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
