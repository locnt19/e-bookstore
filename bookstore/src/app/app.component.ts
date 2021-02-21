import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("sidebar", { static: false, read: ElementRef }) sidebar: ElementRef;
  @ViewChild("sidebarContainer", { static: false, read: ElementRef }) sidebarContainer: ElementRef;
  @ViewChildren("sidebarButton") sidebarButton: QueryList<ElementRef>;

  private _destroy$: Subject<void> = new Subject<void>();

  hideSidebarOnSmallScreen: boolean = false;

  constructor() {}

  ngOnInit() {
    if (window.innerWidth < 1024) {
      this.hideSidebarOnSmallScreen = true;
    }
  }

  ngAfterViewInit() {
    const sidebarButtonNativeElement = this.sidebarButton.map(button => {
      return button.nativeElement;
    });

    fromEvent(sidebarButtonNativeElement, "click")
      .pipe(debounceTime(200), takeUntil(this._destroy$))
      .subscribe(data => {
        this.sidebar.nativeElement.classList.toggle("sidebar_collapsed");
        this.sidebarContainer.nativeElement.classList.toggle("collapsed");
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
