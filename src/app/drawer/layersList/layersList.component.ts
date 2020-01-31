import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

import { MapObjectsService } from '../map/map-object.service';

@Component({
  selector: 'app-layers',
  templateUrl: './layersList.component.html',
  styleUrls: ['./layersList.component.scss']
})
export class LayersComponent implements OnInit {
  @ViewChild('layersList', { static: true }) private layersListEl: ElementRef;
  mapView;
  layersList;
  constructor(private mapObjectService: MapObjectsService) { }
  loadLayers() {
    loadModules([
      'esri/widgets/LayerList'
      ])
      .then(([LayerList]) => {
        this.layersList = new LayerList({
          view: this.mapView
        });
        this.mapObjectService.layersListEl.subscribe(el => {
          console.log('layersListEl');
          if (el && this.layersList) {
            console.log('layersListEl2');
            this.layersList.container = el.nativeElement;
          }
        });
      });
  }
  ngOnInit() {
    this.mapObjectService.setLayersListEl(this.layersListEl);
    this.mapObjectService.mapView.subscribe(mapView => {
      console.log('mapView: ', mapView);
      if (mapView) {
        this.mapView = mapView;
        this.loadLayers();
      }
    });
  }

}
