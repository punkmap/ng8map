import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapObjectsService {
  mapObject: any = {};

  mapView = new BehaviorSubject(null);
  currentMapView = this.mapView.asObservable();

  basemapsGalleryEl = new BehaviorSubject(null);
  currentBasemapsGalleryEl = this.basemapsGalleryEl.asObservable();

  layersListEl = new BehaviorSubject(null);
  currentLayersListEl = this.layersListEl.asObservable();


  constructor() {
  }
  setMapView(mapView: object) {
    this.mapView.next(mapView);
  }

  setBasemapGalleryEl(bmGallery: object) {

    this.basemapsGalleryEl.next(bmGallery);
  }

  setLayersListEl(bmGallery: object) {

    this.layersListEl.next(bmGallery);
  }
}
