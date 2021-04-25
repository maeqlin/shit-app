import {
  Component,
  ElementRef,
  HostBinding,
  Injectable,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { ContractService } from "./contract.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  themes: string[];
  themingSubscription: Subscription;
  title = "shit-app";
  isHandset = false;

  /**
   *
   */
  sidenavRefMode = "side";

  /**
   *
   */

  @Injectable({
    providedIn: "root",
  })
  isSidenavOpened = true;

  @ViewChild("sidenavRef") sidenavRef: MatSidenav;

  private readonly observableSubscriptions: Subscription[] = [];

  constructor(
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly contractService: ContractService
  ) {}

  toggleSideNav() {
    this.sidenavRef.toggle();
    this.router.events.subscribe((event) => {
      if (this.router.navigateByUrl) {
        this.sidenavRef.close();
      }
    });
  }

  ngOnInit(): void {
    this.router.navigate(["/shit-home"]);

    this.observableSubscriptions.push(
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe((result) => {
          if (result.matches) {
            this.isHandset = true;
            this.sidenavRefMode = "over";
            this.isSidenavOpened = false;
          } else {
            this.isHandset = false;
            this.sidenavRefMode = "side";
            this.isSidenavOpened = true;
          }
        })
    );
  }

  connectWallet() {
    this.contractService.enableEthereum();
  }

  ngOnDestroy() {}
}
