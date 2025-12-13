import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pickels } from './pickels';

describe('Pickels', () => {
  let component: Pickels;
  let fixture: ComponentFixture<Pickels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pickels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pickels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
