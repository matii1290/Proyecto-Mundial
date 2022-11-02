import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrDComponent } from './gr-d.component';

describe('GrDComponent', () => {
  let component: GrDComponent;
  let fixture: ComponentFixture<GrDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
