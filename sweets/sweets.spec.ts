import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweets } from './sweets';

describe('Sweets', () => {
  let component: Sweets;
  let fixture: ComponentFixture<Sweets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sweets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
