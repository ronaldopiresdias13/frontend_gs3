import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditProfilePageRoutingModule } from './add-edit-profile-routing.module';

import { AddEditProfilePage } from './add-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditProfilePageRoutingModule
  ],
  declarations: [AddEditProfilePage]
})
export class AddEditProfilePageModule {}
