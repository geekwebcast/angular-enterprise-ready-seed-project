import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingRoutes } from './landing.routing';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutes
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
