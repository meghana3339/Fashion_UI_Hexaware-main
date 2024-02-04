import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallsellersComponent } from './getallsellers.component';

describe('GetallsellersComponent', () => {
  let component: GetallsellersComponent;
  let fixture: ComponentFixture<GetallsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallsellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
