import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherNatureComponent } from './mother-nature.component';

describe('MotherNatureComponent', () => {
  let component: MotherNatureComponent;
  let fixture: ComponentFixture<MotherNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherNatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
