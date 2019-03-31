import { Routes, RouterModule } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureOneComponent
  }
];

export const FeatureOneRoutes = RouterModule.forChild(routes);
