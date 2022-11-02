import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrHComponent } from './gr-h.component';

describe('GrHComponent', () => {
  let component: GrHComponent;
  let fixture: ComponentFixture<GrHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
