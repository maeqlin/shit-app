import { Component, OnInit } from "@angular/core";
import { ContractService } from "src/app/contract.service";

@Component({
  selector: "app-shit-home",
  templateUrl: "./shit-home.component.html",
  styleUrls: ["./shit-home.component.scss"],
})
export class ShitHomeComponent implements OnInit {

  balance: any;

  currentAddress: string;

  connected = false;


  constructor(private readonly contractService : ContractService) {}

  ngOnInit(): void {

    this.checkBalance();
  }

  checkBalance(){
    this.contractService.web3.eth.requestAccounts().then((e) => {
      this.currentAddress = e[0];
      this.contractService.web3.eth
        .getBalance(this.currentAddress)
        .then((e) => {
          this.balance = e;
        })
        .catch((er) => {
          console.log(er);
        });
    });

  }
}
