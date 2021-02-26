import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AccountControlComponent } from "./components/account-control/account-control.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BookDetailComponent } from "./pages/book-detail/book-detail.component";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    AccountControlComponent,
    SidebarComponent,
    BookDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
