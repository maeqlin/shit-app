import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { ContractService } from "../contract.service";
import detectEthereumProvider from '@metamask/detect-provider';


@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  balance: any;

  currentAddress: string;

  connected = false;

  info: { currentAddress: string, balance: string };

  constructor(
    private readonly contractService: ContractService,
    public appComponent: AppComponent,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log(this.contractService.web3.eth.net.isListening());

    this.checkMetaMaskConnection();

    const localInfoString = localStorage.getItem('info');

    if (localInfoString) {
      this.info = JSON.parse(localInfoString);
    }
  }

  async enableEthereum() {
    this.info = await this.contractService.getInfo();
    console.log(this.info);
    // this.contractService.web3.eth.requestAccounts().then((e) => {
    //   this.currentAddress = e[0];
    //   this.contractService.web3.eth
    //     .getBalance(this.currentAddress)
    //     .then((e) => {
    //       this.balance = e;
    //     })
    //     .catch((er) => {
    //       console.log(er);
    //     });
    // });
  }

  async checkMetaMaskConnection() {
    const provider = await detectEthereumProvider() as any;
    
    if (provider) {
      console.log('Ethereum successfully detected!');

      (window.ethereum as any).on('accountsChanged', (accounts) => {
        // If user has locked/logout from MetaMask, this resets the accounts array to empty
        console.log(accounts);

        if (!accounts.length) {
          console.log('disconn');
          
          this.info = null;
          localStorage.removeItem('info');
          this.cdr.detectChanges();
          // logic to handle what happens once MetaMask is locked
        }
    });

      const chainId = await provider.request({
        method: 'eth_chainId'
      });

      console.log(chainId);
    } else {

      // if the provider is not detected, detectEthereumProvider resolves to null
      // show popup
      console.error('Please install MetaMask!')
    }
  }
}
