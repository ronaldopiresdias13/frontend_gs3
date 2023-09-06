import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditProfilePage } from './add-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditProfilePageRoutingModule {}
