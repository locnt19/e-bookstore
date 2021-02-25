import { Component, OnInit } from "@angular/core";
import { SidebarService } from "./sidebar.service";

@Component({
  selector: "ui-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) {}

  ngOnInit(): void {}
}
