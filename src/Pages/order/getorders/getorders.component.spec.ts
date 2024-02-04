import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetordersComponent } from './getorders.component';

describe('GetordersComponent', () => {
  let component: GetordersComponent;
  let fixture: ComponentFixture<GetordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
