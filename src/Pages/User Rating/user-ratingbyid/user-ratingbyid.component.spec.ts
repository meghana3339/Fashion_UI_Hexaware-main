import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingbyidComponent } from './user-ratingbyid.component';

describe('UserRatingbyidComponent', () => {
  let component: UserRatingbyidComponent;
  let fixture: ComponentFixture<UserRatingbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRatingbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRatingbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
