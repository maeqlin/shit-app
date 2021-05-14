import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectDialogComponent } from '../connect-dialog/connect-dialog.component';

@Component({
  selector: 'app-install-metamask-dialog',
  templateUrl: './install-metamask-dialog.component.html',
  styleUrls: ['./install-metamask-dialog.component.scss']
})
export class InstallMetamaskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef : MatDialogRef<ConnectDialogComponent>) { }

  ngOnInit(): void {
  }

}
