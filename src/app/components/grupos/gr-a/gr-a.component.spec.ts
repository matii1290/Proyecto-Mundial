import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrAComponent } from './gr-a.component';

describe('GrAComponent', () => {
  let component: GrAComponent;
  let fixture: ComponentFixture<GrAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
