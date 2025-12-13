import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powders } from './powders';

describe('Powders', () => {
  let component: Powders;
  let fixture: ComponentFixture<Powders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Powders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Powders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
