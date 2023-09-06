import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPerfisPage } from './list-perfis.page';

const routes: Routes = [
  {
    path: '',
    component: ListPerfisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPerfisPageRoutingModule {}
