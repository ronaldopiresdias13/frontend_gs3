import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPerfisPageRoutingModule } from './list-perfis-routing.module';

import { ListPerfisPage } from './list-perfis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPerfisPageRoutingModule
  ],
  declarations: [ListPerfisPage]
})
export class ListPerfisPageModule {}
