import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitSettingsComponent } from './shit-settings.component';

describe('ShitSettingsComponent', () => {
  let component: ShitSettingsComponent;
  let fixture: ComponentFixture<ShitSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
