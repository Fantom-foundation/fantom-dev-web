import { Routes } from '@angular/router';

import { RfcsFantomFrameworkComponent } from './rfcs-fantom-framework.component';
import { RfcsFantomWasmComponent } from './rfcs-fantom-wasm.component';
import { RfcsLachesisConsensusComponent } from './rfcs-lachesis-consensus.component';
import { ListComponent } from './list.component';

export const generatedRoutes: Routes = [
  {
    path: 'rfcsfantom-framework',
    component: RfcsFantomFrameworkComponent
  },
  {
    path: 'rfcsfantom-wasm',
    component: RfcsFantomWasmComponent
  },
  {
    path: 'rfcslachesis-consensus',
    component: RfcsLachesisConsensusComponent
  },
  {
    path: '',
    component: ListComponent
  }
];
