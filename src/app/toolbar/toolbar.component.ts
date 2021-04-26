import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ContractService } from "../contract.service";


@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  balance: any;

  currentAddress: string;

  connected = false;

  constructor(
    private readonly contractService: ContractService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.contractService.web3.eth.net.isListening());
  } 

  enableEthereum() {
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
