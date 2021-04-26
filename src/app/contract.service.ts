import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import Web3 from "web3";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  /**
   * web3 main
   */
  web3: Web3;

  currentAddress: string;

  constructor() {
    this.web3 = new Web3(
      Web3.givenProvider ||
        "wss://rinkeby.infura.io/ws/v3/38548d4828ba402a93d2fd3b5cc3afca"
    );
  }

  ngOnInit() {}

  // this.web3.eth.requestAccounts().then((e) => {
  //   console.log(e);

  // });
  // return new Promise((resolve) => {
  //   this.web3.eth.requestAccounts().then((e) => {
  //     resolve();
  //   });
  // });
}
