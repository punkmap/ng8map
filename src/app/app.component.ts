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
