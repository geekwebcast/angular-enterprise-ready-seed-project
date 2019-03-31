import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '@app/features/landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  }
];

export const LandingRoutes = RouterModule.forChild(routes);
