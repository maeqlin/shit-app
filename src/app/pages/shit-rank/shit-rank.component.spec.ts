import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitRankComponent } from './shit-rank.component';

describe('ShitRankComponent', () => {
  let component: ShitRankComponent;
  let fixture: ComponentFixture<ShitRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
