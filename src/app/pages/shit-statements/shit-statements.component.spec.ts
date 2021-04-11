import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitStatementsComponent } from './shit-statements.component';

describe('ShitStatementsComponent', () => {
  let component: ShitStatementsComponent;
  let fixture: ComponentFixture<ShitStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
