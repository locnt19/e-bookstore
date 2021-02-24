import { Component, Input, OnInit } from "@angular/core";
import { Dropdown } from "~/app/interfaces/dropdown";

@Component({
  selector: "ui-dropdown",
  templateUrl: "./dropdown.component.html",
  styles: []
})
export class DropdownComponent implements OnInit {
  @Input() title: string;
  @Input() openDropdown: boolean;
  @Input() zIndexHighest: boolean;
  @Input() itemList: Array<Dropdown>;

  constructor() {}

  ngOnInit(): void {}

  public toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }
}
