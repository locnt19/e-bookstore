import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { SidebarService } from "./components/sidebar/sidebar.service";
import { routingMaps } from "./routingMaps";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private _navigationEnd$: Observable<NavigationEnd>;
  private _destroy$: Subject<void> = new Subject<void>();
  private _pageDefaultLayout: Array<string>;
  private _currentPage: string;

  isDefaultLayout: boolean;

  constructor(private _router: Router, public sidebarService: SidebarService) {
    this._navigationEnd$ = _router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this._destroy$)
    );

    this._pageDefaultLayout = [routingMaps.ROOT, routingMaps.HOME].map(
      route => {
        return "/" + route;
      }
    );
  }

  ngOnInit() {
    this._navigationEnd$
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: NavigationEnd) => {
        this._currentPage = event.url;

        this.isDefaultLayout = this._pageDefaultLayout.includes(
          this._currentPage
        );
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
