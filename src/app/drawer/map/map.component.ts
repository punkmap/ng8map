import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import { AppConfigService } from '../../services/app-config.service';
import { MapObjectsService } from './map-object.service';

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
  userDefinedZoom = 5;
  constructor(private appConfigService: AppConfigService, private mapObjectService: MapObjectsService ) {}

  async initializeMap() {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [Map,
              MapView,
              FeatureLayer,
              Track] = await loadModules([
                'esri/Map',
                'esri/views/MapView',
                'esri/layers/FeatureLayer',
                'esri/widgets/Track'
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
      this.view.when(() => {
        this.mapObjectService.setMapView(this.view);

        this.view.watch('zoom', (value) => {
          console.log('zoom watch value: ', value);
          this.userDefinedZoom = value;
        });

        //TODO: Add track to toolSetup function that links to the config
        const track = new Track({view: this.view});
        this.view.ui.add(track, 'top-left');
        track.on('track', function() {
          this.trackObj.zoomlevel = this.userDefinedZoom;
        });
      });
      // Add the widget to the top-right corner of the view
      // this.view.ui.add(this.addBasemapGallery(BasemapGallery), {
      //   container: 'searchWidget'
      // });
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
        popupTemplate: layer.popupTemplate,
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
