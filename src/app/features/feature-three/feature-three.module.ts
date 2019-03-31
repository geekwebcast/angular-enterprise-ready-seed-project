import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureThreeComponent } from './feature-three.component';
import { FeatureThreeRoutes } from './feature-three.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureThreeRoutes
  ],
  declarations: [FeatureThreeComponent]
})
export class FeatureThreeModule { }
