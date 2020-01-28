import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { AppConfig } from './config/appConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'materialTest';
  constructor(private appConfigService: AppConfigService) { }
  config: any = AppConfig;

  ngOnInit() {
    console.log('CONFIG', this.config);
    this.appConfigService.setConfig(this.config);
  }
}
