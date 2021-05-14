import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContractService } from 'src/app/contract.service';


@Component({
  selector: 'app-connect-dialog',
  templateUrl: './connect-dialog.component.html',
  styleUrls: ['./connect-dialog.component.scss']
})
export class ConnectDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef : MatDialogRef<ConnectDialogComponent>,
    private readonly contractService: ContractService,
    ) { }

  ngOnInit(): void {
  }



  async connectMetamask(){
    const info = await this.contractService.getInfo();

    this.dialogRef.close({
      data: info
    });
  }

}
