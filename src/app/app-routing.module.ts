import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "feature1",
    loadChildren: "./features/feature-one/feature-one.module#FeatureOneModule"
  },
  {
    path: "feature2",
    loadChildren: "./features/feature-two/feature-two.module#FeatureTwoModule"
  },
  {
    path: "feature3",
    loadChildren:"./features/feature-three/feature-three.module#FeatureThreeModule"
  },
  {
    path: "**",
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
