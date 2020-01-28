import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';


import { AppConfigService } from '../services/app-config.service';
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit, OnDestroy {
  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;
  view: any;
  config: any;
  constructor(private appConfigService: AppConfigService ) {}

  async initializeMap() {
    try {

      console.log('mapViewEl: ', this.mapViewEl);
      console.log('mapView initializeMap 1');
      // Load the modules for the ArcGIS API for JavaScript
      const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);
      this.config = this.appConfigService.getConfig();
      console.log('CONFIG2: ', this.config);
      // Configure the Map
      const mapProperties = {
        basemap: 'streets'
      };

      const map = new Map(mapProperties);

      // Initialize the MapView
      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this.config.map.center,
        zoom: this.config.map.zoom,
        map
      };

      this.view = new MapView(mapViewProperties);

      return this.view;
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
}
