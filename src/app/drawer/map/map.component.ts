import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;
  view: any;
  config: any;
  constructor(private appConfigService: AppConfigService ) {}

  async initializeMap() {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [Map,
              MapView,
              FeatureLayer,
              BasemapGallery] = await loadModules([
                'esri/Map',
                'esri/views/MapView',
                'esri/layers/FeatureLayer',
                'esri/widgets/BasemapGallery'
              ]);
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
      this.addLayers(map, FeatureLayer);
      this.view = new MapView(mapViewProperties);
      // Add the widget to the top-right corner of the view
      this.view.ui.add(this.addBasemapGallery(BasemapGallery), {
        position: 'top-right'
      });
      return this.view;
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }
  addLayers(map, FeatureLayer) {
    this.config.map.layers.forEach(layer => {
      map.add(new FeatureLayer({
        url: layer.url,
        id: layer.id,
        label: layer.label,
      }));
    });
  }
  addBasemapGallery(BasemapGallery) {
    return new BasemapGallery({
      view: this.view
    });

    // // Add the widget to the top-right corner of the view
    // this.view.ui.add(basemapGallery, {
    //   position: "top-right"
    // });
  }
  ngOnDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
}
