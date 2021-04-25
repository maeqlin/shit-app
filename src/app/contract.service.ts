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


  setAccount: any;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/38548d4828ba402a93d2fd3b5cc3afca"
      )
    );
  }

  ngOnInit() {}

  enableEthereum() {
    this.web3.eth.getAccounts().then((e) => {
      console.log(e);
    });

    // this.web3.eth.requestAccounts().then((e) => {
    //   console.log(e);

    // });
    // return new Promise((resolve) => {
    //   this.web3.eth.requestAccounts().then((e) => {
    //     resolve();
    //   });
    // });
  }
}
