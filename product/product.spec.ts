import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdInter } from './prod-inter';

describe('ProdInter', () => {
  let component: ProdInter;
  let fixture: ComponentFixture<ProdInter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdInter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdInter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
