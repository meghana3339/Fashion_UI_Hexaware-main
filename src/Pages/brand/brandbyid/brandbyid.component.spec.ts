import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandbyidComponent } from './brandbyid.component';

describe('BrandbyidComponent', () => {
  let component: BrandbyidComponent;
  let fixture: ComponentFixture<BrandbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
