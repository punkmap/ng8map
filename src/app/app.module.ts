import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";



import { MaterialModule } from "./material";
import { NavbarComponent } from "./navbar/navbar.component";
import { DrawerComponent } from "./drawer/drawer.component";
import { MapComponent } from "./drawer/map/map.component";
import { BasemapsComponent } from "./drawer/basemapsGallery/basemapsGallery.component";
import { LayersComponent } from "./drawer/layersList/layersList.component";
import { EsriMapComponent } from "./esri-map/esri-map.component";
@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    DrawerComponent,
    MapComponent,
    BasemapsComponent,
    LayersComponent,
    EsriMapComponent],
  imports: [BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
