import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './rdv-pat.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdvPatRoutingModule {}
