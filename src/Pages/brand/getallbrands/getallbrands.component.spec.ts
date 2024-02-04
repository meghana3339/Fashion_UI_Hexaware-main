import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbrandsComponent } from './getallbrands.component';

describe('GetallbrandsComponent', () => {
  let component: GetallbrandsComponent;
  let fixture: ComponentFixture<GetallbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallbrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
