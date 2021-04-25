import { Component, OnInit } from "@angular/core";
import { ContractService } from "src/app/contract.service";

@Component({
  selector: "app-shit-home",
  templateUrl: "./shit-home.component.html",
  styleUrls: ["./shit-home.component.scss"],
})
export class ShitHomeComponent implements OnInit {
  constructor(private readonly contractService: ContractService) {}

  balance: any;

  ngOnInit(): void {
    this.contractService.web3.eth
      .getBalance("0x3325FF60C570BF812A8cE73D0D35C9Ddc6EcBE98")
      .then((e) => {
        this.balance = e;
      });
  }
}
