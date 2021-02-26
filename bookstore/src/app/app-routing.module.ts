import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { routingMaps } from "./routingMaps";
import { BookDetailComponent } from "./pages/book-detail/book-detail.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: routingMaps.ROOT,
    redirectTo: routingMaps.HOME,
    pathMatch: "full"
  },
  {
    path: routingMaps.HOME,
    component: HomeComponent
  },
  {
    path: routingMaps.BOOK_DETAIL,
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
