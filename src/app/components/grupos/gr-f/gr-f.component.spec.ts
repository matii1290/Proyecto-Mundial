import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrFComponent } from './gr-f.component';

describe('GrFComponent', () => {
  let component: GrFComponent;
  let fixture: ComponentFixture<GrFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
