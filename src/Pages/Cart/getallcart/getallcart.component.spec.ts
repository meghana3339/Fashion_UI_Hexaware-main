import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcartComponent } from './getallcart.component';

describe('GetallcartComponent', () => {
  let component: GetallcartComponent;
  let fixture: ComponentFixture<GetallcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallcartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
