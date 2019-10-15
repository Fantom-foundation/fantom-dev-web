import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./root/root.module').then(m => m.RootModule) },
  { path: 'guide', loadChildren: () => import('./guide/guide.module').then(m => m.GuideModule) },
  { path: 'wiki', loadChildren: () => import('./wiki/generated/generated.module').then(m => m.GeneratedModule) },
  { path: 'rfc', loadChildren: () => import('./rfc/generated/generated.module').then(m => m.GeneratedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { /*enableTracing: true,*/ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
