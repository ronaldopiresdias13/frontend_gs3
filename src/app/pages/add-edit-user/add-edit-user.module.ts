import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditUserPageRoutingModule } from './add-edit-user-routing.module';

import { AddEditUserPage } from './add-edit-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditUserPageRoutingModule
  ],
  declarations: [AddEditUserPage]
})
export class AddEditUserPageModule {}
