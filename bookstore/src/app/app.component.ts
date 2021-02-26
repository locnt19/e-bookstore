import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { SidebarService } from "./components/sidebar/sidebar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
