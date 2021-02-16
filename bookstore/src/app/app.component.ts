import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild("sidebar", { static: false, read: ElementRef }) sidebar: ElementRef;
  @ViewChild("sidebarContainer", { static: false, read: ElementRef }) sidebarContainer: ElementRef;
  @ViewChild("sidebarButtonToggle", { static: false, read: ElementRef }) sidebarButtonToggle: ElementRef;

  private _destroy$: Subject<void> = new Subject<void>();
  title = "e-bookstore";

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.sidebarButtonToggle.nativeElement, "click")
      .pipe(debounceTime(300), takeUntil(this._destroy$))
      .subscribe((data) => {
        this.sidebar.nativeElement.classList.toggle("sidebar_collapsed");
        this.sidebarContainer.nativeElement.classList.toggle("collapsed");
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
