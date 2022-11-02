import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrBComponent } from './gr-b.component';

describe('GrBComponent', () => {
  let component: GrBComponent;
  let fixture: ComponentFixture<GrBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
