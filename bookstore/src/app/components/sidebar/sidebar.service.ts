import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  sidebarCollapsed: boolean;

  constructor() {
    if (window.innerWidth < 1024) {
      this.sidebarCollapsed = true;
    } else {
      this.sidebarCollapsed = false;
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
