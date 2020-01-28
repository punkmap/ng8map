import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }
  config: {};

  public getConfig = () => {
    return this.config;
  }
  public setConfig = (config) => {
    this.config = config;
  }
}
