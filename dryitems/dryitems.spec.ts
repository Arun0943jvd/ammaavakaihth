import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dryitems } from './dryitems';

describe('Dryitems', () => {
  let component: Dryitems;
  let fixture: ComponentFixture<Dryitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dryitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dryitems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
