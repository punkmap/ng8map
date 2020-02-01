// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

// export class AppComponent {
//   // Set our map properties
//   mapCenter = [-122.4194, 37.7749];
//   basemapType = 'satellite';
//   mapZoomLevel = 12;

//   // See app.component.html
//   mapLoadedEvent(status: boolean) {
//     console.log('The map loaded: ' + status);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { AppConfig } from './config/appConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng8map';
  constructor(private appConfigService: AppConfigService) { }
  config: any = AppConfig;


  ngOnInit() {
    this.appConfigService.setConfig(this.config);
  }
}
