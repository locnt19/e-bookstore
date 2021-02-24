import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AccountControlComponent } from './components/account-control/account-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    AccountControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
