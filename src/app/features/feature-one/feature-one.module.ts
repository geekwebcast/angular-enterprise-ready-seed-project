import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneRoutes } from '@app/features/feature-one/feature-one-routing';
import { FeatureOneComponent } from '@app/features/feature-one/feature-one.component';


@NgModule({
  imports: [
    CommonModule,
    FeatureOneRoutes
  ],
  declarations: [FeatureOneComponent]
})
export class FeatureOneModule { }
