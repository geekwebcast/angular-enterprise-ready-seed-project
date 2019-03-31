import { Routes, RouterModule } from '@angular/router';
import { FeatureTwoComponent } from './feature-two.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureTwoComponent
  }
];

export const FeatureTwoRoutes = RouterModule.forChild(routes);

