import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTwoComponent } from './feature-two.component';
import { FeatureTwoRoutes } from './feature-two.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureTwoRoutes
  ],
  declarations: [FeatureTwoComponent]
})
export class FeatureTwoModule { }
