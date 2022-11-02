import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrGComponent } from './gr-g.component';

describe('GrGComponent', () => {
  let component: GrGComponent;
  let fixture: ComponentFixture<GrGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
