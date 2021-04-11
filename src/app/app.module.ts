import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterModule, Routes } from "@angular/router";
import { ShitHomeComponent } from "./pages/shit-home/shit-home.component";
import { ShitLiquidityComponent } from "./pages/shit-liquidity/shit-liquidity.component";

const appRoutes: Routes = [
  { path: 'shit-home', component: ShitHomeComponent },
  {
    path: "shit-liquidty",
    component: ShitLiquidityComponent,
    data: { title: "Shit Liquidty" },
  },
];

@NgModule({
  declarations: [AppComponent, ShitLiquidityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
