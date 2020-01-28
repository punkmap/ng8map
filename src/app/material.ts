import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule ],
  exports: [ MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule ],
})
export class MaterialModule { }
