import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

import { MapObjectsService } from '../map/map-object.service';

@Component({
  selector: 'app-basemaps',
  templateUrl: './basemaps.component.html',
  styleUrls: ['./basemaps.component.scss']
})
export class BasemapsComponent implements OnInit {
  @ViewChild('basemaps', { static: true }) private basemapsEl: ElementRef;
  mapView;
  basemapsGallery;
  constructor(private mapObjectService: MapObjectsService) { }

  async initializeBasemaps(mapView) {
    try {
      const [
        BasemapGallery
      ] = await loadModules([
          'esri/widgets/BasemapGallery'
        ]);
      // Load the modules for the ArcGIS API for JavaScript

      // console.log(this.mapObjectService.getMapView());
      console.log('this.mapView: ', this.mapView);
      this.mapView.ui.add(this.addBasemapGallery(BasemapGallery), {
        position: 'top-right',
      });
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }
  addBasemapGallery(BasemapGallery: any) {

    return new BasemapGallery({
        view: this.mapView,
        container: this.basemapsEl,
      });
  }
  loadBaseMapGallery() {
    loadModules([
      'esri/widgets/BasemapGallery',
      'esri/Basemap',
      'esri/widgets/BasemapGallery/support/LocalBasemapsSource'
      ])
      .then(([BasemapGallery, Basemap, LocalBasemapsSource]) => {
        const basemapIds = [
          'streets-navigation-vector',
          'hybrid',
          'streets-night-vector',
          'gray-vector', 'dark-gray-vector',
          'topo-vector',
          'streets-vector'
        ];
        // const source = new LocalBasemapsSource({basemaps: []});
        // basemapIds.forEach(id => {
        //   source.basemaps.push(Basemap.fromId(id));
        // });

        this.basemapsGallery = new BasemapGallery({view: this.mapView});
        this.mapObjectService.basemapsGalleryEl.subscribe(el => {
          console.log('basemapsEl');
          if (el && this.basemapsGallery) {
            console.log('basemapsEl2');
            this.basemapsGallery.container = el.nativeElement;
          }
        });
      });
  }
  ngOnInit() {
    this.mapObjectService.setBasemapGalleryEl(this.basemapsEl);
    this.mapObjectService.mapView.subscribe(mapView => {
      console.log('mapView: ', mapView);
      if (mapView) {
        this.mapView = mapView;
        this.loadBaseMapGallery();
        // this.initializeBasemaps(mapView);
      }
    });
  }

}
