import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerbyidComponent } from './sellerbyid.component';

describe('SellerbyidComponent', () => {
  let component: SellerbyidComponent;
  let fixture: ComponentFixture<SellerbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
