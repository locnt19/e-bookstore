import { Component, OnInit } from "@angular/core";
import { CONFIG_DEFAULT } from "~/app/config-default";
import { AccountControl } from "~/app/interfaces/account-control";
import { Notification } from "~/app/interfaces/notification";
import { UtilService } from "~/app/services/util.service";

@Component({
  selector: "ui-account-control",
  templateUrl: "./account-control.component.html",
  styles: []
})
export class AccountControlComponent implements OnInit {
  onSmallScreen: boolean;
  notificationList: Array<Notification>;
  controlList: Array<AccountControl>;
  togglecontrolList: boolean = false;
  toggleNotifList: boolean = false;

  constructor(private _util: UtilService) {}

  ngOnInit(): void {
    this.onSmallScreen = this._util.onSmallScreen();
    this.controlList = CONFIG_DEFAULT.accountControls;
    this.notificationList = CONFIG_DEFAULT.notification;
  }
}
