import { Component, OnInit } from "@angular/core";
import { CONFIG_DEFAULT } from "~/app/config-default";
import { AccountControl } from "~/app/interfaces/account-control";
import { UtilService } from "~/app/services/util.service";

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

  constructor(private _util: UtilService) {}

  ngOnInit(): void {
    this.onSmallScreen = this._util.onSmallScreen();
    this.controlList = this.notifList = CONFIG_DEFAULT.accountControls;
  }
}
