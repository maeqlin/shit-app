import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitHomeComponent } from './shit-home.component';

describe('ShitHomeComponent', () => {
  let component: ShitHomeComponent;
  let fixture: ComponentFixture<ShitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShitHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
