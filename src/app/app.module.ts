import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material';
import { NavbarComponent } from './navbar/navbar.component';
import { MapviewComponent } from './mapview/mapview.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MapComponent } from './drawer/map/map.component';
import { BasemapsComponent } from './drawer/basemaps/basemaps.component';
import { PopupComponent } from './drawer/map/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapviewComponent,
    DrawerComponent,
    MapComponent,
    BasemapsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
