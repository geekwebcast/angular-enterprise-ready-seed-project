import { Routes, RouterModule } from '@angular/router';
import { FeatureThreeComponent } from './feature-three.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureThreeComponent
  }
];

export const FeatureThreeRoutes = RouterModule.forChild(routes);
