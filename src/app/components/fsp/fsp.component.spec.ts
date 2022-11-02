import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSPComponent } from './fsp.component';

describe('FSPComponent', () => {
  let component: FSPComponent;
  let fixture: ComponentFixture<FSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
