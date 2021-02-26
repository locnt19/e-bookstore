import { Component, OnInit } from "@angular/core";
import { CONFIG_DEFAULT } from "~/app/config-default";
import { Sidebar } from "~/app/interfaces/sidebar";
import { UtilService } from "~/app/services/util.service";
import { SidebarService } from "./sidebar.service";

@Component({
  selector: "ui-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent implements OnInit {
  onSmallScreen: boolean;
  sidebarListOrigin: Array<Sidebar>;

  constructor(
    public sidebarService: SidebarService,
    private _util: UtilService
  ) {}

  ngOnInit(): void {
    this.onSmallScreen = this._util.onSmallScreen();
    this.sidebarListOrigin = CONFIG_DEFAULT.sidebar;
  }

  routerLinkActive(item: Sidebar): string {
    return item.route !== "" ? "active" : "";
  }
}
