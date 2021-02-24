import { Component, OnInit } from "@angular/core";
import { AccountControl } from "~/app/interfaces/account-control";

@Component({
  selector: "ui-account-control",
  templateUrl: "./account-control.component.html",
  styles: []
})
export class AccountControlComponent implements OnInit {
  onSmallScreen: boolean;
  notifList: Array<AccountControl>;
  controlList: Array<AccountControl>;
  togglecontrolList: boolean = false;
  toggleNotifList: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.onSmallScreen = window.innerWidth < 1024;

    this.controlList = this.notifList = [
      {
        title: "Profile",
        route: "/",
        hideOnMobile: false,
        hideOnDesktop: false
      },
      {
        title: "Notifications",
        route: "/",
        hideOnMobile: false,
        hideOnDesktop: true
      },
      {
        title: "Account settings",
        route: "/",
        hideOnMobile: false,
        hideOnDesktop: false
      },
      {
        title: "Sign out",
        route: "/",
        hideOnMobile: false,
        hideOnDesktop: false
      }
    ];
  }
}
