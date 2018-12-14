import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './root/root.module#RootModule' },
  { path: 'guide', loadChildren: './guide/guide.module#GuideModule' },
  { path: 'wiki', loadChildren: './wiki/generated/generated.module#GeneratedModule' },
  { path: 'rfc', loadChildren: './rfc/generated/generated.module#GeneratedModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { /*enableTracing: true,*/ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
