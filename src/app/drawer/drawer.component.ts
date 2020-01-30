import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from '../services/sidenav.service'
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer' , { static: true })
  public sidenav: MatSidenav;
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.setSidenav(this.sidenav);
  }

}
