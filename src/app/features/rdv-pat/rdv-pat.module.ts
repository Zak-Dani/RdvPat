import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RdvPatRoutingModule} from './rdv-pat-routing.module';
import {MaterialModule} from './material.module';
import {BodyComponent, FooterComponent, HeaderComponent} from './components';
import {HomeComponent} from './containers';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, BodyComponent],
  imports: [
    CommonModule,
    RdvPatRoutingModule,
    MaterialModule
  ]
})
export class RdvPatModule {
}
