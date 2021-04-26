import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
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

  constructor(
    private readonly contractService: ContractService,
    private readonly router: Router
  ) {
    // router.events.pipe(filter(e => e instanceof NavigationEnd).subscribe((e) => { ... }

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.checkBalance();
      }
    });
  }

  ngOnInit(): void {
  }

  checkBalance() {
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
