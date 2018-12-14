import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RfcsFantomFrameworkComponent } from './rfcs-fantom-framework.component';
import { RfcsFantomWasmComponent } from './rfcs-fantom-wasm.component';
import { RfcsLachesisConsensusComponent } from './rfcs-lachesis-consensus.component';
import { ListComponent } from './list.component';
import { generatedRoutes } from './generated.routes';

@NgModule({
  declarations: [RfcsFantomFrameworkComponent, RfcsFantomWasmComponent, RfcsLachesisConsensusComponent, ListComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(generatedRoutes),
    NgxPageScrollModule
  ]
})
export class GeneratedModule {}
