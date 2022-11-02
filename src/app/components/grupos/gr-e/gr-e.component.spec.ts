import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrEComponent } from './gr-e.component';

describe('GrEComponent', () => {
  let component: GrEComponent;
  let fixture: ComponentFixture<GrEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
