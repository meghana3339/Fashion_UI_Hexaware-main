import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbyidComponent } from './productbyid.component';

describe('ProductbyidComponent', () => {
  let component: ProductbyidComponent;
  let fixture: ComponentFixture<ProductbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
