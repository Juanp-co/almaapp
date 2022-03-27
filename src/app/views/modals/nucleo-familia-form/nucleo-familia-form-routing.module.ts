import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NucleoFamiliaFormPage } from './nucleo-familia-form.page';

const routes: Routes = [
  {
    path: '',
    component: NucleoFamiliaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NucleoFamiliaFormPageRoutingModule {}
