import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CONFIG_DEFAULT } from "~/app/config-default";
import { Dropdown } from "~/app/interfaces/dropdown";

@Component({
  selector: "page-book-detail",
  templateUrl: "./book-detail.component.html",
  styles: []
})
export class BookDetailComponent implements OnInit {
  dropdownList: Array<Dropdown>;

  constructor(_route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dropdownList = CONFIG_DEFAULT.dropdownSort;
  }
}
