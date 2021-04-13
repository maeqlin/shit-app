import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
})
export class ThemeSwitcherComponent implements OnInit {
  // let's define default theme
  themeColor: string;

  /**
   * button toggled
   */

  isDarkTheme = false;

  constructor() {}

  ngOnInit() {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    // if theme is stored in storage - use it
    const body = document.getElementsByTagName("mat-drawer-container")[0];


    if (localStorage.getItem("pxTheme") == "dark-theme") {
      //set theme color to one from storage
      this.isDarkTheme = true;
      this.themeColor = "dark-theme";
      body.classList.add(this.themeColor);
      localStorage.setItem("pxTheme", this.themeColor);
      //add that class to body
    } else if (localStorage.getItem("pxTheme") == "light-theme") {
      this.themeColor = "light-theme";
      body.classList.add(this.themeColor);
      localStorage.setItem("pxTheme", this.themeColor);
    } else {
      this.themeColor = "light-theme";
      body.classList.add(this.themeColor);
      this.isDarkTheme = false;
      localStorage.setItem("pxTheme", this.themeColor);
    }
  }

  themeSwitcher() {
    const body = document.getElementsByTagName("mat-drawer-container")[0];
    body.classList.remove(this.themeColor);

    // switch theme
    this.themeColor == "light-theme"
      ? (this.themeColor = "dark-theme")
      : (this.themeColor = "light-theme");
    body.classList.add(this.themeColor);

    //save it to local storage

    localStorage.setItem("pxTheme", this.themeColor);
  }
}
