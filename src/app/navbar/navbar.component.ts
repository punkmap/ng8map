import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/sidenav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit() {
  }
  navbarSideMenuSelect() {
    this.navBarService.toggle()
  }

}
