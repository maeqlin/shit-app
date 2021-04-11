import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitTokensComponent } from './shit-tokens.component';

describe('ShitTokensComponent', () => {
  let component: ShitTokensComponent;
  let fixture: ComponentFixture<ShitTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
