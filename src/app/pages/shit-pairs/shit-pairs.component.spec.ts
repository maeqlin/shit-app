import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitPairsComponent } from './shit-pairs.component';

describe('ShitPairsComponent', () => {
  let component: ShitPairsComponent;
  let fixture: ComponentFixture<ShitPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitPairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
