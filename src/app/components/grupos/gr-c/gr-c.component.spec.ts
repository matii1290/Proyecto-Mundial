import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrCComponent } from './gr-c.component';

describe('GrCComponent', () => {
  let component: GrCComponent;
  let fixture: ComponentFixture<GrCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
