import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { SidebarService } from "./components/sidebar/sidebar.service";
import { Dropdown } from "./interfaces/dropdown";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject<void>();

  dropdownList: Array<Dropdown>;

  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {
    this.dropdownList = [
      { title: "Account settings", route: "/" },
      { title: "Support", route: "/" },
      { title: "License", route: "/" },
      { title: "Sign out", route: "/" }
    ];
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
