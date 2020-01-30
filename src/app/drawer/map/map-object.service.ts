import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapObjectsService {
  mapObject: any = {};

  mapView = new BehaviorSubject(null);
  currentMapView = this.mapView.asObservable();

  basemapsGallery = new BehaviorSubject(null);
  currentBasemapGallery = this.basemapsGallery.asObservable();

  basemapsGalleryEl = new BehaviorSubject(null);
  currentBasemapsGalleryEl = this.basemapsGalleryEl.asObservable();


  constructor() {
  }
  setMapView(mapView: object) {
    this.mapView.next(mapView);
  }

  setBasemapGallery(bmGallery: object) {

    this.basemapsGallery.next(bmGallery);
  }

  setBasemapGalleryEl(bmGallery: object) {

    this.basemapsGalleryEl.next(bmGallery);
  }
//   toggleSidebarVisibility() {
//     this.sidebarVisibilityChange.next(!this.isSidebarVisible);
// }
}
