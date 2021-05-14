import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallMetamaskDialogComponent } from './install-metamask-dialog.component';

describe('InstallMetamaskDialogComponent', () => {
  let component: InstallMetamaskDialogComponent;
  let fixture: ComponentFixture<InstallMetamaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallMetamaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallMetamaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
