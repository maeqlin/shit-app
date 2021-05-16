import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
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

  erc20Address = "0xf7c6d77e653af5fead1ce07ebd30f2910ce70ad8";

  erc20Balance: string;

  minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
    // decimals
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      type: "function",
    },
  ];

  constructor(
    private readonly contractService: ContractService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {
    // router.events.pipe(filter(e => e instanceof NavigationEnd).subscribe((e) => { ... }

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        //this.checkBalance();
      }
    });
  }

  async getTokenBalance() {
    const contract = new this.contractService.web3.eth.Contract(
      this.minABI as any,
      this.erc20Address
    );

    const weiBalance = await contract.methods
      .balanceOf(this.contractService.localStrorageAddress().currentAddress)
      .call();

    this.erc20Balance = this.contractService.web3.utils.fromWei(
      weiBalance,
      "ether"
    );

    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.getTokenBalance();
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
