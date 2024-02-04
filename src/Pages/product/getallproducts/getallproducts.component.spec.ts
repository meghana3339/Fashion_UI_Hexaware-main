import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallproductsComponent } from './getallproducts.component';

describe('GetallproductsComponent', () => {
  let component: GetallproductsComponent;
  let fixture: ComponentFixture<GetallproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
