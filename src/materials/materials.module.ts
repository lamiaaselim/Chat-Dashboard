import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialsRoutingModule } from './materials-routing.module';
import {MatButtonModule} from '@angular/material/button';

// Generic Module
const MaterialComponents = [MatButtonModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MaterialsRoutingModule
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialsModule { }
