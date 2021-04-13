import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  themes: string[];
  themingSubscription: Subscription;
  title = "shit-app";
  homePage = "localhost:4200";
  constructor(
    private readonly router: Router,
    public themeSwitch: ThemeSwitcherComponent
  ) {}



  ngOnInit(): void {
    this.router.navigate(["/shit-home"]);
 
  }


  ngOnDestroy() {
  }
}
