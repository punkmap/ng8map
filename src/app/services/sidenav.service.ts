import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  // sideMenuIsOpen = false;
  // @Output() change:
  // EventEmitter<boolean> = new EventEmitter();

  // toggle() {
  //   console.log('navbarService toggle');
  //   this.sideMenuIsOpen = !this.sideMenuIsOpen;
  //   this.change.emit(this.sideMenuIsOpen);
  // }

  private sidenav: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}

	public toggle(): void {
		this.sidenav.toggle();
	}


}
