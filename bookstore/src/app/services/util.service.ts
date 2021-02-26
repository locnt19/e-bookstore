import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilService {
  constructor() {}

  onSmallScreen() {
    return window.innerWidth < 1024;
  }
}
