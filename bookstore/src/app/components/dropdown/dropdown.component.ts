import { Component, Input, OnInit } from "@angular/core";
import { Dropdown } from "~/app/interfaces/dropdown";

@Component({
  selector: "ui-dropdown",
  templateUrl: "./dropdown.component.html",
  styles: []
})
export class DropdownComponent implements OnInit {
  @Input() zIndexHighest: boolean;
  @Input() itemList: Array<Dropdown>;
  toggle: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown() {
    this.toggle = !this.toggle;
  }
}
