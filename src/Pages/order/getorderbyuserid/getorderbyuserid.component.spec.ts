import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorderbyuseridComponent } from './getorderbyuserid.component';

describe('GetorderbyuseridComponent', () => {
  let component: GetorderbyuseridComponent;
  let fixture: ComponentFixture<GetorderbyuseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetorderbyuseridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetorderbyuseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
