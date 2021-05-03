import { Injectable } from "@angular/core";
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

  info: { currentAddress: string, balance: string } = { currentAddress: '', balance: '' };

  constructor() {
    this.web3 = new Web3(
      Web3.givenProvider ||
      "wss://rinkeby.infura.io/ws/v3/38548d4828ba402a93d2fd3b5cc3afca"
    );
  }

  ngOnInit() { }

  async getAccounts() {
    return await this.web3.eth.requestAccounts();
  }

  async getInfo(localInfo?) {
    if (!localInfo) {
      const accounts = await this.getAccounts();
      this.info.currentAddress = accounts[0];
    } else {
      this.info.currentAddress = localInfo.currentAddress;
    }

    const balance = await this.web3.eth.getBalance(this.info.currentAddress);

    this.info.balance = balance;

    localStorage.setItem('info', JSON.stringify(this.info));

    return this.info;

    // this.web3.eth.requestAccounts().then((e) => {
    //   this.currentAddress = e[0];
    //   this.web3.eth
    //     .getBalance(this.currentAddress)
    //     .then((e) => {
    //       this.balance = e;
    //     })
    //     .catch((er) => {
    //       console.log(er);
    //     });
    // });
  }
}
