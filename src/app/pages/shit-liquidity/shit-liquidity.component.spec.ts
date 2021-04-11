import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShitLiquidityComponent } from './shit-liquidity.component';

describe('ShitLiquidityComponent', () => {
  let component: ShitLiquidityComponent;
  let fixture: ComponentFixture<ShitLiquidityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShitLiquidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
