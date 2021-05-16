import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterModule, Routes } from "@angular/router";
import { ShitHomeComponent } from "./pages/shit-home/shit-home.component";
import { ShitLiquidityComponent } from "./pages/shit-liquidity/shit-liquidity.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ShitPairsComponent } from "./pages/shit-pairs/shit-pairs.component";
import { ShitTokensComponent } from "./pages/shit-tokens/shit-tokens.component";
import { ShitRankComponent } from "./pages/shit-rank/shit-rank.component";
import { ShitStatementsComponent } from "./pages/shit-statements/shit-statements.component";
import { ShitSettingsComponent } from "./pages/shit-settings/shit-settings.component";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";
import { FormsModule } from "@angular/forms";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConnectDialogComponent } from "./dialogs/connect-dialog/connect-dialog.component";
import {MatDialogModule} from '@angular/material/dialog';
import { InstallMetamaskDialogComponent } from './dialogs/install-metamask-dialog/install-metamask-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';




const appRoutes: Routes = [
  { path: "shit-home", component: ShitHomeComponent },
  {
    path: "shit-liquidty",
    component: ShitLiquidityComponent,
    data: { title: "Shit Liquidty" },
  },
  {
    path: "shit-pairs",
    component: ShitPairsComponent,
    data: { title: "Shit Piars" },
  },
  {
    path: "shit-tokens",
    component: ShitTokensComponent,
    data: { title: "Shit Tokens" },
  },
  {
    path: "shit-rank",
    component: ShitRankComponent,
    data: { title: "Shit Rank" },
  },
  {
    path: "shit-statements",
    component: ShitStatementsComponent,
    data: { title: "Shit Statements" },
  },
  {
    path: "shit-settings",
    component: ShitSettingsComponent,
    data: { title: "Shit Settings" },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ShitLiquidityComponent,
    ShitPairsComponent,
    ShitTokensComponent,
    ShitRankComponent,
    ShitStatementsComponent,
    ShitSettingsComponent,
    ThemeSwitcherComponent,
    ToolbarComponent,
    ConnectDialogComponent,
    InstallMetamaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSlideToggleModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    AngularSvgIconModule.forRoot(),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" }),
  ],
  providers: [ThemeSwitcherComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
