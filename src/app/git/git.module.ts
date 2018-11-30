import { ModuleWithProviders, NgModule } from '@angular/core';

import { GitService } from './git.service';

@NgModule({
  declarations: [],
  imports: []
})
export class GitModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: GitModule, providers: [GitService] };
  }
}
