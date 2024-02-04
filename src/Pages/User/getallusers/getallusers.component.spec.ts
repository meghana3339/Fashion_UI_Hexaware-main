import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallUsersComponent } from './getallusers.component';

describe('GetallusersComponent', () => {
  let component: GetallUsersComponent;
  let fixture: ComponentFixture<GetallUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
