import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbynameComponent } from './productbyname.component';

describe('ProductbynameComponent', () => {
  let component: ProductbynameComponent;
  let fixture: ComponentFixture<ProductbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbynameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
